import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GeminiService } from '../../services/gemini.service';

@Component({
  selector: 'app-prompt-improver',
  standalone: true,
  templateUrl: './prompt-improver.component.html',
  styleUrls: ['./prompt-improver.component.css'],
  imports: [CommonModule, FormsModule]
})
export class PromptImproverComponent {
  originalPrompt: string = '';
  improvedPrompt: string = '';
  isLoading: boolean = false;
  error: string = '';
  isCopied: boolean = false;
  apiResponse: any = null;

  showFloatingBox: boolean = false;
  floatingBoxPosition = { x: 100, y: 100 };
  isDragging: boolean = false;
  dragOffset = { x: 0, y: 0 };

  
  
  constructor(private geminiService: GeminiService) { }

  improvePrompt(): void {
    if (!this.originalPrompt.trim()) {
      this.error = 'Por favor, digite um prompt para melhorar.';
      return;
    }

    this.isLoading = true;
    this.error = '';
    this.improvedPrompt = '';
    this.isCopied = false;
    this.apiResponse = null;
    this.showFloatingBox = false;

    this.geminiService.improvePrompt(this.originalPrompt).subscribe({
      next: (response) => {
        this.isLoading = false;
        this.apiResponse = response;

        const improvedText = this.extractImprovedPrompt(response);

        if (improvedText) {
          this.improvedPrompt = improvedText;
          this.showFloatingBox = true;
        } else {
          this.error = 'Não foi possível extrair o prompt melhorado da resposta.';
        }
      },
      error: (err) => {
        this.isLoading = false;
        this.error = 'Erro ao processar sua solicitação.';
      }
    });
  }

  private extractImprovedPrompt(response: any): string {
    if (response.candidates?.[0]?.content?.parts?.[0]?.text) {
      return response.candidates[0].content.parts[0].text.trim();
    }

    if (response.contents?.[0]?.parts?.[0]?.text) {
      return response.contents[0].parts[0].text.trim();
    }

    if (response.text) {
      return response.text.trim();
    }

    return '';
  }

  startDrag(event: MouseEvent): void {
    this.isDragging = true;
    this.dragOffset.x = event.clientX - this.floatingBoxPosition.x;
    this.dragOffset.y = event.clientY - this.floatingBoxPosition.y;
    event.preventDefault();
  }

  @HostListener('document:mousemove', ['$event'])
  onDrag(event: MouseEvent): void {
    if (!this.isDragging) return;

    this.floatingBoxPosition.x = event.clientX - this.dragOffset.x;
    this.floatingBoxPosition.y = event.clientY - this.dragOffset.y;
  }

  @HostListener('document:mouseup')
  stopDrag(): void {
    this.isDragging = false;
  }

  closeFloatingBox(): void {
    this.showFloatingBox = false;
  }

  copyToClipboard(): void {
    if (!this.improvedPrompt) return;

    navigator.clipboard.writeText(this.improvedPrompt).then(() => {
      this.isCopied = true;
      setTimeout(() => {
        this.isCopied = false;
      }, 3000);
    }).catch(() => {
      this.error = 'Erro ao copiar para a área de transferência.';
    });
  }

  autoResize() {
    const textarea = document.getElementById('originalPrompt') as HTMLTextAreaElement;
    if (textarea) {
      textarea.style.height = 'auto';
      const newHeight = Math.min(textarea.scrollHeight, 200);
      textarea.style.height = newHeight + 'px';
    }
  }

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      if (event.shiftKey) {
        return;
      } else {
        event.preventDefault();
        this.improvePrompt();
      }
    }
  }

  reset(): void {
    this.originalPrompt = '';
    this.improvedPrompt = '';
    this.error = '';
    this.isCopied = false;
    this.apiResponse = null;
    this.showFloatingBox = false;
  }
}