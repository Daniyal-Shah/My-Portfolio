import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PortfolioNavbar } from '../portfolio-navbar/portfolio-navbar';

@Component({
  selector: 'app-content',
  imports: [RouterOutlet, PortfolioNavbar],
  templateUrl: './content.html',
  styleUrl: './content.css',
})
export class Content {}
