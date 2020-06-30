import { Component, OnInit } from '@angular/core';
import { Expense } from '../../models/expense';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-submit',
  templateUrl: './submit.page.html',
  styleUrls: ['./submit.page.scss'],
})
export class SubmitPage implements OnInit {
  categories: string[];
  expense: Expense;
  submitted = false;
  constructor() { 
    this.categories = ['Travel', 'Meals', 'Accomodation', 'Others'];
    this.expense = new Expense (new Date().toISOString(), 0, this.categories[0], '');
  }
  get testing() { return JSON.stringify(this.expense); }
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.submitted = true;
    if (form.valid && this.expense.amount > 0) {
    alert('Expense submitted:'
    + "\n Date: " + this.expense.date
    + "\n Amount: " + "$" + this.expense.amount
    + "\n Category: " + this.expense.category
    + "\n Merchant: " + this.expense.merchant
    + "\n Notes: " + this.expense.notes );
    }
  }
}
