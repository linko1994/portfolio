import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.sass']
})
export class AboutmeComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          fontColor: "white",
          fontSize: 18,
          beginAtZero: true
                }
            }],
      xAxes: [{
        ticks: {
          fontColor: "white",
          fontSize: 18,
          beginAtZero: true
            }
        }]
    },
    legend:{
      display: "false",
      labels:{
        fontColor: "white",
        boxWidth: 35,
        fontSize: 16
      }
    }
  };

  public barChartLabels = ["Confidence"];
  public barChartType = 'horizontalBar';
  public barChartLegend = 'true';

  public barChartData = [
    {data: [100], label: "HTML", backgroundColor: "#48946B", borderColor: "#48946B",  hoverBackgroundColor: "#48946B"},
    {data: [90], label: "CSS", backgroundColor: "#26764B", borderColor: "#26764B", hoverBackgroundColor: "#26764B"},
    {data: [75], label: "Javascript", backgroundColor: "#75B291", borderColor: "#75B291", hoverBackgroundColor: "#75B291"},
    {data: [80], label: "PHP", backgroundColor: "#10394F", borderColor: "#10394F",  hoverBackgroundColor: "#10394F"},
    {data: [80], label: "JQuery", backgroundColor: "#7A7FAE", borderColor: "#7A7FAE", hoverBackgroundColor: "#7A7FAE"},
    {data: [70], label: "Typescript", backgroundColor: "#303673", borderColor: "#303673", hoverBackgroundColor: "#303673"},
    {data: [35], label: "Python", backgroundColor: "#515790", borderColor: "#515790", hoverBackgroundColor: "#515790"},
    {data: [60], label: "Angular", backgroundColor: "#6C8EA0", borderColor: "#6C8EA0", hoverBackgroundColor: "#6C8EA0"},
    {data: [85], label: "Laravel", backgroundColor: "#446E85", borderColor: "#446E85", hoverBackgroundColor: "#446E85"}
  ];

  

  constructor() { }

  public innerWidth: any;
  ngOnInit() {
      this.innerWidth = window.innerWidth;
      if (this.innerWidth >= 768) 
        {
          this.barChartType = 'bar';
        }

        if (this.innerWidth <= 767) {
          this.barChartType = 'horizontalBar';

         this.barChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            scales: {
              yAxes: [{
                ticks: {
                  fontColor: "white",
                  fontSize: 7,
                  beginAtZero: true
                        }
                    }],
              xAxes: [{
                ticks: {
                  fontColor: "white",
                  fontSize: 10,
                  beginAtZero: true
                    }
                }]
            },
            legend:{
              display: "true",
              
              labels:{
                fontColor: "white",
                boxWidth: 10,
                fontSize: 10
              }
            }
          };
        


        }    
  }

}
