import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-portfolio-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './portfolio-navbar.html',
  styleUrl: './portfolio-navbar.css',
})
export class PortfolioNavbar {}
