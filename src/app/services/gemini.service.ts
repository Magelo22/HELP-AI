import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent';
  private apiKey = 'AIzaSyBsfZpBxx55aGFz0Bw2BvdAPWvNHh65T_w';

  constructor(private http: HttpClient) { }

  improvePrompt(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      contents: [{
        parts: [{
          text: this.createImprovementPrompt(prompt)
        }]
      }],
      safetySettings: [
        {
          category: "HARM_CATEGORY_HARASSMENT",
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        },
        {
          category: "HARM_CATEGORY_HATE_SPEECH", 
          threshold: "BLOCK_MEDIUM_AND_ABOVE"
        }
      ],
      generationConfig: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
        maxOutputTokens: 2048
      }
    };

    const url = `${this.apiUrl}?key=${this.apiKey}`;
    
    return this.http.post(url, body, { headers });
  }

  private createImprovementPrompt(originalPrompt: string): string {
    return `SEU PAPEL: Você é um especialista em melhorar prompts usando a metodologia STAR (Situação, Tarefa, Ação, Resultado).

INSTRUÇÃO: Melhore o prompt abaixo aplicando a metodologia STAR. NÃO execute o prompt, apenas o reformule seguindo a estrutura STAR.

PROMPT ORIGINAL: "${originalPrompt}"

ESTRUTURA STAR QUE DEVE SER SEGUIDA:
- SITUAÇÃO: Contexto ou cenário
- TAREFA: Objetivo específico  
- AÇÃO: Passos ou abordagem
- RESULTADO: Resultado esperado

REGRAS:
1. Mantenha o propósito original do prompt
2. Apenas reformule seguindo STAR
3. Não adicione explicações
4. Não execute o prompt
5. Retorne apenas o prompt melhorado

RETORNE APENAS O PROMPT MELHORADO E NADA MAIS:`;
  }
}