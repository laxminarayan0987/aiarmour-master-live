import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
  public aboutUsKpi = [
    {
     heading : "Our Expertise",
      bodyList : [
        {
          head: "Cybersecurity Solutions:  ",
          body: "We offer advanced cybersecurity solutions to safeguard your organization's data, networks, and digital assets from evolving cyber threats. "
        },
        {
          head: "AI & ML Research and Development:  ",
          body: "Our R&D team is at the forefront of innovation, advancing AI and Machine Learning technologies to address both business and educational challenges. "
        },
        {
          head: "AI Implementation for Enhanced Productivity:  ",
          body: "We specialize in integrating AI into corporate environments to boost productivity. "
        },
        {
          head: "Generative AI Integration:  ",
          body: "ProtexAI helps businesses incorporate Generative AI into their workplaces, enabling creative solutions like content generation, chatbots, and automated insights. "
        },
        {
          head: "Data Analytics & Insights:  ",
          body: "We harness the power of data analytics to help businesses make informed decisions."
        },
	{
          head: "Enterprise Application Development:  ",
          body: "We build and modernize enterprise-grade applications that are secure, scalable, and tailored to meet the unique requirements of businesses. "
        },
	{
          head: "Secured AI Solutions:  ",
          body: "We prioritize the responsible use of AI by ensuring that our solutions are secure, compliant, and privacy-focused."
        },
	{
          head: "AI-Enabled Threat Protection:  ",
          body: "Our AI-enabled threat protection services leverage advanced AI models to proactively identify, analyze, and respond to potential threats."
        },
	{
          head: "NexGenAI Solutions:  ",
          body: "At ProtexAI, we specialize in transforming the latest advancements in Generative AI and Deep Learning into real-world solutions, empowering a diverse range of industries, including Retail, Tourism, Publishing, Sports & Fitness, Customer Support, Education, and Job Training. "
        },
      ]
    },
    {
      heading : "About Our Co-working Place",
      bodyList : [
        {
          head: "Startup India Recognition:  ",
          body: "As a recognized startup by Startup India, we are committed to fostering innovation and entrepreneurship."
        },
        {
          head: "ISO 9001:2015 Certification:  ",
          body: "Our ISO certification reflects our dedication to maintaining the highest standards of quality in our processes and services."
        },
        {
          head: "MSME Registration:  ",
          body: "As a registered MSME, we adhere to ethical business practices and contribute to the economic development of the community."
        },
        {
          head: "AICTE Internship Approval:  ",
          body: "We are approved by AICTE to offer internships, ensuring we provide valuable learning experiences and contribute to skill development."
        },
        {
          head: "Ministry of Corporate Affairs Incorporation:  ",
          body: "Incorporated with the Ministry of Corporate Affairs, we operate with full compliance and transparency."
        }
      ]
    }
  ];
  public cardClass = "";
  constructor() {
    console.log('Component initialized');
    const numberOfCources = this.aboutUsKpi.length;
    if (numberOfCources <= 15) {
      this.cardClass = "col-md-12" + (12/numberOfCources)
    }
    else this.cardClass = "col-md-4";
    console.log(this.cardClass)
  }
}
