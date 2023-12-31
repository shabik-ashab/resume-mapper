# Resume Mapper

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Important Links for Research

- [Sample Resumes](https://capd.mit.edu/resources/sample-resumes/)
- [Sample Resume PDF](https://cdn.uconnectlabs.com/wp-content/uploads/sites/123/2021/08/sampe-resumes-capd.pdf)

## 1. Introduction

The purpose of this document is to provide a high-level requirement analysis for the development of a resume creation application. The application will allow users to create professional resumes using provided templates and generate new outlines based on job postings. It will also provide features for resume sharing, downloading, updating, and customization. Additionally, the application will have future capabilities for cover letter generation and utilize machine learning for improved resume and cover letter generation.

## 2. Client Requirements

### 2.1 User Features

The application will have the following features for users:

- Account Management:
  - User Registration: Users can create an account by providing their name, email, and password.
  - User Login: Users can log in to their account using their credentials.
- Resume Creation and Management:
  - Create Resume: Users can create a new resume by providing relevant information and selecting a template from multiple options.
  - Edit Resume: Users can edit their existing resumes to update information or make modifications.
  - Delete Resume: Users can delete a specific resume from their collection.
  - Primary Resumes: Users can maintain three primary resumes, which can be selected from the last ten developed resumes.
  - Resume History: Users can view their resume history, consisting of the last ten developed resumes.
- Resume Generation and Customization:
  - Generate Outline: Users can paste a job post, and the application will generate a new resume outline tailored to that specific job.
  - Customizable Sections: Users can move each section of the resume template up or down to customize the layout according to their preferences.
  - Custom Fields: Users can create their own fields if needed to include additional information in their resumes.
  - Template Selection: Users can choose from multiple resume templates offering standard color options.
- Resume Sharing and Downloading:
  - Share Resume: Users can share a PDF link of their resume with others.
  - Download Resume: Users can download their resume as a PDF file.
- Blog (Future Implementation):
  - Create Blog Post: Users can create and publish blog posts related to resume writing, job search tips, and career advice.
  - Read Blog Posts: Users can browse and read blog posts published by other users or industry professionals.
  - Comment on Blog Posts: Users can leave comments on blog posts to engage in discussions and provide feedback.
- Review Feature (Future Implementation):
  - Review Resumes: Users can review and provide feedback on resumes shared by other users.
  - Rating System: Users can rate resumes based on their quality, effectiveness, and overall presentation.

### 2.2 Future Requirements

The application will have the following additional features in the future:

- Cover Letter Generation: Users will be able to generate cover letters based on their resumes, further enhancing their job application materials.
- Machine Learning Integration: Machine learning techniques will be implemented to enhance the resume and cover letter generation process, providing more accurate and effective results.
- Blog and Review Feature: Users will have the ability to create and publish blog posts, read posts by others, leave comments, and review resumes shared by other users.

## 3. Models

The application will have the following data models:

- User:
  - Attributes: Name, email, password
  - Relationships: Resumes (array of 3 resumes), Resume History (array of 10 resumes)
- Resume:
  - Attributes: Title, name, email, phone number, address, summary, education (array of education details), experience (array of experience details), skills (array of skills), projects (array of project details), certifications (array of certifications), languages (array of languages), references (array of references), template, color, file (resume PDF file)
- Education:
  - Attributes: Degree, university, year
- Experience:
  - Attributes: Title, company, duration, description
- Skills:
  - Attributes: Name
- Projects:
  - Attributes: Title, description
- Certifications:
  - Attributes: Name, organization, year
- Languages:
  - Attributes: Name
- References:
  - Attributes: Name, position, company, contact
- Template:
  - Attributes: Name
- Color:
  - Attributes: Name

## 4. Pages and Functionality

The application will consist of the following pages and functionality:

### 4.1 Home Page

- Login: Allows users to log in to their accounts.
- Sign Up: Allows users to create a new account.
- Sample Resumes: Provides a link to sample resumes for reference.
- Generate Resume: Allows users to generate a new resume by providing information and selecting a template.
- Recent Resumes: Displays the user's last 10 developed resumes.
- Featured Templates: Displays a selection of templates for users to choose from.
- Share Resume: Allows users to share a PDF link of their resume.
- Download Resume: Allows users to download their resume as a PDF file.
- Update Resumes: Allows users to update their developed resumes instantly.

### 4.2 Account Page

- Profile: Displays user's profile information (name, email).
- Resumes: Lists the user's primary resumes (3 resumes).
- Resume History: Lists the user's resume history (last 10 developed resumes).
- Create New Resume: This allows users to create a new resume by providing information and selecting a template.
- Edit Resume: Allows users to edit their existing resumes.
- Delete Resume: Allows users to delete a specific resume.
- Generate Cover Letter: This allows users to generate a cover letter based on their resume.

### 4.3 Blog Page (Future Implementation)

- Create Blog Post: Allows users to create and publish blog posts.
- Browse Blog Posts: Displays a list of published blog posts for users to browse and read.
- Read Blog Post: Displays the content of a specific blog post, including comments and discussions.
- Comment on Blog Post: Allows users to leave comments on blog posts.

### 4.4 Review Page (Future Implementation)

- Review Resumes: Allows users to review and provide feedback on resumes shared by other users.
- Rate Resumes: Allows users to rate resumes based on their quality and effectiveness.

## 5. Additional Requirements

- OCR Format: All generated PDFs should be in OCR format to enable easy text extraction.
- Resume Section Movement: Users should be able to move each section of the resume template up or down to customize the layout according to their preferences.
- Custom Fields: Users should have the ability to create their own fields if needed to include additional information in their resumes.
- Color Selection: Each resume template should provide standard color options for users to choose from.
- Standard Resume Format: The resume format should strictly adhere to standard practices from Europe, America, and the UK.
- Machine Learning: Machine learning techniques will be integrated in the future to improve the resume and cover letter generation process.
- Blog and Review Feature: The application will allow users to create and publish blog posts, read posts by others, leave comments, and review resumes shared by other users.
