/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import * as fs from 'fs/promises';
import * as path from 'path';
import * as xlsx from 'xlsx';

@Injectable()
export class CandidateService {
  async loadCandidatesFromExcel(file: Express.Multer.File) {
    if (!file || !file.buffer) {
      throw new Error('File is missing or not properly uploaded');
    }

    try {
      const uploadsDir = path.join(__dirname, '../../uploads');

    
      try {
        await fs.stat(uploadsDir);
      } catch {
        await fs.mkdir(uploadsDir, { recursive: true });
      }

      const outputPath = path.join(uploadsDir, 'updated_candidates.xlsx');

    
      const workbook = xlsx.read(file.buffer, { type: 'buffer' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      const candidatesData = xlsx.utils.sheet_to_json(worksheet);
      console.log('Candidatos cargados:', candidatesData);

      // Agregar un nuevo candidato dinámicamente
      const newCandidate = {
        seniority: 'senior', 
        yearsOfExperience: 5,
        availability: true,
      };
      candidatesData.push(newCandidate); 

      const newWorkbook = xlsx.utils.book_new();
      const newWorksheet = xlsx.utils.json_to_sheet(candidatesData);
      xlsx.utils.book_append_sheet(newWorkbook, newWorksheet, 'Candidatos');

      // Guardar el nuevo archivo Excel
      await xlsx.writeFile(newWorkbook, outputPath);
      console.log('Archivo Excel actualizado guardado en:', outputPath);
      
    } catch (error) {
      console.error('Error al procesar el archivo Excel:', error);
      throw new Error('Error processing Excel file');
    }
  }
}
