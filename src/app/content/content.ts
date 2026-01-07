import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioNavbar } from '../portfolio-navbar/portfolio-navbar';
import { Sidebar } from '../sidebar/sidebar';

@Component({
  selector: 'app-content',
  imports: [RouterOutlet, PortfolioNavbar, Sidebar],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {}
