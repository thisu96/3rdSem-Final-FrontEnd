import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Category } from '../../dtos/category';
import { Item } from '../../dtos/item';
import { CategoriesService } from '../../services/categories.service';
import { FileService } from '../../services/file.service';
import { ItemService } from '../../services/item.service';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-item',
  templateUrl: './manage-item.component.html',
  styleUrls: ['./manage-item.component.css']
})
export class ManageItemComponent implements OnInit {

  selectedFile: File = null;
  imageUrl: String = './assets/images/default.png';
  fileToUpload: File = null;
  categories: Array<Category> = [];
  selectedCategory: Category = new Category();
  tempCategory: Category = null;
  manuallySelectedCategory: boolean = false;

  items: Array<Item> = [];
  selectedItem: Item = new Item();
  tempItem: Item = null;
  manuallySelected: boolean = false;
  @ViewChild("frmItem") frmItem: NgForm;
 // @ViewChild("frmUp") frmUp: NgForm;
  @ViewChild('fileInput') inputEl: ElementRef;

	size: string;

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadprogress: Observable<number>;

  constructor(private categoryService: CategoriesService, private itemService: ItemService,
  private http: HttpClient, private afStorage: AngularFireStorage, private fileService: FileService) { }

  ngOnInit() {
    //this.loadAllCatogories();
    this.loadAllItems();
  }

  loadAllCatogories(): void {
    this.categoryService.getAllCategories().subscribe(
      (result) => {
        this.categories = result;
        console.log(this.categories);
      }
    )
  }

  upload() {
    console.log("upload")
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    let fileCount: number = inputEl.files.length;
    let formData = new FormData();
    if (fileCount > 0) { // a file was selected
        let item: Item = new Item();
        formData.append('file', inputEl.files.item(0), inputEl.files.item(0).name);
        this.size = (inputEl.files.item(0).size / 1024 / 1024).toFixed(2)
        this.fileService.uploadFile(formData)

        this.selectedItem.imageUrl = inputEl.files.item(0).name; // database imageurl column ekata image name eka set karana thana
        console.log(this.selectedItem)
        this.itemService.saveItem(this.selectedItem).subscribe(
            (result)=>{
                if (result){
                        //this.items = new Array();
                          swal("Congrats!", "You Sussefully Add Item To Database!", "success")
                          this.loadAllItems();
                          this.clear();
                }else{

                }
            }
        )
    }
}


  loadAllItems(): void {
    this.itemService.getAllItems().subscribe(
      (result) => {
        this.items = result;
        for (let i = 0; i < this.items.length; i++) {
          this.items[i].imageUrl = this.itemService.getImage(this.items[i].imageUrl);
          }
      });
  }

  selectCategory(category: Category): void {
    this.selectedCategory = category;
    this.tempCategory = Object.assign({}, category);
    this.manuallySelectedCategory = true;
  }

  selectItem(item: Item): void {
    this.clear();
    this.selectedItem = item;
    this.tempItem = Object.assign({}, item);
    this.manuallySelected = true;
  }

  // setImage($event){
  //   const fil = event.target.f
  //   this.imageUrl = fil;
  //   console.log(this.imageUrl);
  // }

  clear(): void {
    let index = this.items.indexOf(this.selectedItem);
    if (index !== -1) {
      this.items[index] = this.tempItem;
      this.tempItem = null;
    }
    this.selectedItem = new Item();
    this.manuallySelected = false;
  }

  saveItem(): void{
    this.itemService.saveItem(this.selectedItem).subscribe(
      (result)=>{
        if (result){
          swal("Congrats!", "You Sussefully Add Item To Database!", "success")
          this.loadAllItems();
          this.clear();
        }else{
          swal("OOPs!", "Something wents wrong try again!", "error")
        }
      }
    )
  }

  deleteItem(item: Item): void {
    if (confirm("Are you sure you want to delete this Item?")) {
      this.itemService.deleteItem(item.itemCode).subscribe(
        (result) => {
          if (result) {
            swal("Congrats!", "You Sussefully delete data!", "success")
            this.loadAllItems();
          } else {
            swal("OOPs!", "Failed to delete data!", "error")
          }
          this.loadAllItems();
        }
      )
    }
  }

}
