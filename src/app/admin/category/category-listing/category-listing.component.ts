import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Category } from '../model/category';
import { CategoryService } from '../services/category.service';
import { ToastrService } from 'ngx-toastr';
import { NotificationsService } from 'src/app/core/services/notification/notifications.service';

@Component({
  selector: 'app-category-listing',
  templateUrl: './category-listing.component.html',
  styleUrls: ['./category-listing.component.scss']
})
export class CategoryListingComponent implements OnInit {

  categoryForm: FormGroup;
  submitted!: boolean;
  category!: Category;

  @ViewChild('closeButton') closeButton:any;


  constructor(private fb: FormBuilder, 
    private catService: CategoryService,
     private notifyService:NotificationsService
     ) {
    this.categoryForm = this.fb.group({
      categoryType:[""],
      label: ['www'],
      imageUrl: ['eee'],
      description: ['tt'],
      isActive: [false]
    });
  }

  ngOnInit(): void {
  }

  get catForm() { return this.categoryForm.controls; }

  saveChanges() {
    if (this.categoryForm.valid) {
      this.category = new Category().deserialize(this.categoryForm.value);
      this.catService.createCategory(this.category).then(
        (data) => {
          this.notifyService.showSuccess("Data saved successfully!!!","Syccess")
          this.categoryForm.patchValue(
            {
              categoryType:"",
              label:"",
              imageUrl:"",
              description:"",
              isActive: false
            }
          );
          this.submitted = false;
          this.closeButton.nativeElement.click();
        },
        (error) => {
          console.error(error);
          this.notifyService.showError("Some error occured!","Error");
        }
      );

    }

  }
}
