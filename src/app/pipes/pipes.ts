import { CommonModule } from '@angular/common';
import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { TruncateCustomePipe } from '../truncate-custome-pipe';
import { CustompipelinePipe } from '../custompipeline-pipe';
@Component({
  selector: 'app-pipes',
  imports: [CommonModule, TruncateCustomePipe, CustompipelinePipe],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css'
})
export class Pipes{
      name = 'Priyal Verma';
      message = 'yo i.m a custom pipe example for truncating';
      person = {
        firstname: 'Priyal',
        lastname: 'Verma'
      };
      public date = new Date();
}
