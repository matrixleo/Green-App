import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from '../project-service/projects.service';
@Component({
  selector: 'app-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.css']
})
export class ProjectsFormComponent {
  form: FormGroup;
  
  
  projectForm = this.formBuilder.group({
    name:['',Validators.required],
    abbreviation:['',Validators.required],
    projectType:['',Validators.required],
    propertyName:['',Validators.required],
  }) as FormGroup<any>;

  secondFormGroup = this.formBuilder.group({
    street:['',Validators.required],
    city:['',Validators.required],
    state:['',Validators.required],
    jobType:['',Validators.required],
    number:['',Validators.required],
    createdAt:['',Validators.required],

  }) as FormGroup<any>;
  
  constructor(
    private router: Router,
    private formBuilder:FormBuilder, 
    private projectService:ProjectService
    ){
       this.form = new FormGroup({});
    }
  
  ngOnInit() {
    this.form = this.formBuilder.group({
      teamMembers: this.formBuilder.array([
        this.formBuilder.group({
          name: ['',Validators.required],
          position:['',Validators.required]
        })
      ])
    });
  }

  addTeamMember() {
    this.teamMembers.push(new FormGroup({
      name: new FormControl(''),
      position: new FormControl('')
    }));
  }

  get teamMembers() {
    return this.form.get('teamMembers') as FormArray;
  }

  saveForm(){
    if(this.projectForm.valid && this.secondFormGroup.valid){
    this.save().subscribe((response: any) => {
      console.log(response);
      this.router.navigate(['projects', response.id]);
    });
  }
}
  
  save() {
    const project = {
      clientInfo: {
        id: '',
        name: this.projectForm.value.name,
        abbreviation: this.projectForm.value.abbreviation
      },
      propertyInfo: {
        id: '',
        name: this.projectForm.value.propertyName,
        address: {
          street: this.secondFormGroup.value.street,
          city: this.secondFormGroup.value.city,
          state:this.secondFormGroup.value.state,
          stateAbbr: '',
          zip: '',
          location: {
            lat: '',
            lng: ''
          },
          zoneId: ''
        }
      },
      total: 0,
      clientTotal: 0,
      estimatedTotal: 0,
      profit: 0,
      cost: 0,
      invoiceAmount: 0,
      approvedProjectedAmount: 0,
      approvedInvoicesAmount: 0,
      estimatedSavings: 0,
      estimatedMarketPrice: 0,
      savings: 0,
      marketPrice: 0,
      linkedProjects: [],
      workAreaReport: false,
      convertToOnHold: false,
      number:this.secondFormGroup.value.number,
      jobType: this.secondFormGroup.value.jobType,
      anticipatedStartDate:'',
      anticipatedNumOfDays: 0,
      numOfDays: 0,
      status: '',
      jobClass: '',
      projectType: this.projectForm.value.projectType,
      omissions: this.form.value.teamMembers,
      clientSignReq: false,
      id: '',
      createdAt: new Date(),
      updatedAt: new Date()
    };
   return this.projectService.postProject(project);
  }
  

}