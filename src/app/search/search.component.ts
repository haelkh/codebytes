import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchText: string = '';
  articles = [
    {
      title: 'Understanding the difference between grid-template and grid-auto',
      date: 'Oct 09, 2018',
      content:
        'With all the new properties related to CSS Grid Layout, one of the distinctions that always confused me was the difference between the grid-template-* and grid-auto-* properties...',
    },
    {
      title: 'Recreating the GitHub Contribution Graph with CSS Grid',
      date: 'Nov 14, 2019',
      content:
        "Using CSS Grid to recreate the GitHub Contribution Graph can be a great exercise to learn about CSS Grid's flexibility and capabilities...",
    },
    {
      title: 'An introduction to CSS Grid Layout',
      date: 'Jan 23, 2020',
      content:
        'CSS Grid Layout is a powerful tool for creating two-dimensional layouts on the web. It allows for rows and columns, similar to a table layout, but with much more control...',
    },
  ];

  filteredArticles: any[] = [];

  updateSearch() {
    const search = this.searchText.trim().toLowerCase();
    this.filteredArticles = this.articles.filter(
      (article) =>
        article.title.toLowerCase().includes(search) ||
        article.content.toLowerCase().includes(search)
    );
  }

  splitAndHighlight(text: string): string[] {
    return text.split(/(\s+|[-_(){}\[\],.;!?]+)/); // Split by spaces, punctuation, and special characters
  }

  isExactMatch(word: string): boolean {
    if (!this.searchText.trim()) {
      return false;
    }
    return word.toLowerCase() === this.searchText.trim().toLowerCase();
  }
}
