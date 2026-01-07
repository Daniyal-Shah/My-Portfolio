import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Education, Experience, Skill } from '../../modals/app.modals';

@Component({
  selector: 'app-resume',
  imports: [DatePipe],
  templateUrl: './resume.html',
  styleUrl: './resume.css',
})
export class Resume {
  education: Education[] = [
    {
      id: 0,
      degree: 'Bachelor of Science in Computer Science',
      institute: 'IBA',
      startYear: new Date(2016, 7, 1),
      endYear: new Date(2020, 6, 1),
      description: 'Graduated with distinction in Computer Science.',
    },
  ];

  experience: Experience[] = [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Hub360 Solutions.',
      startYear: new Date(2020, 6, 1),
      endYear: new Date(2023, 5, 1),
      description: 'Led development of scalable web applications.',
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'Digital Innovations Ltd.',
      startYear: new Date(2023, 5, 1),
      endYear: new Date(2024, 5, 1),
      description: 'Developed and maintained web applications.',
    },
  ];
  skills: Skill[] = [
    {
      id: 1,
      name: 'Web Design',
      level: 'Advanced',
      yearsOfExperience: 5,
    },
    {
      id: 2,
      name: 'Graphic Design',
      level: 'Expert',
      yearsOfExperience: 7,
    },
    {
      id: 3,
      name: 'Branding',
      level: 'Expert',
      yearsOfExperience: 8,
    },
    {
      id: 4,
      name: 'WordPress',
      level: 'Beginner',
      yearsOfExperience: 2,
    },
  ];
}
