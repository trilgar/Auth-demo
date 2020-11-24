import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Library} from '../../models/library/library';
import {ActivatedRoute} from '@angular/router';
import {LibraryService} from '../../services/library/library.service';

@Component({
  selector: 'app-library-create-action',
  templateUrl: './library-create-compound.component.html',
  styleUrls: ['./library-create-compound.component.css']
})
export class LibraryCreateCompoundComponent implements OnInit {
  createCompoundForm: FormGroup;
  library: Library;

  constructor(private route: ActivatedRoute,
              private libraryService: LibraryService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createCompoundForm = this.formBuilder.group({
      name: new FormControl(this.library.name,
        [Validators.required, Validators.maxLength(10)]),
      description: new FormControl(this.library.description,
        [Validators.required, Validators.maxLength(50)])
    });
  }

  get description(): any {
    return this.createCompoundForm.get('description');
  }

  get name(): any {
    return this.createCompoundForm.get('name');
  }
}
