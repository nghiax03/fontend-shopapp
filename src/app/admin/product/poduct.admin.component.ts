import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-admin',
  templateUrl: './poduct.admin.component.html',
  styleUrl: './poduct.admin.component.scss'
})
export class PoductAdminComponent implements OnInit {
  constructor(
    private router: Router,
) {

}
ngOnInit() {

}

}
