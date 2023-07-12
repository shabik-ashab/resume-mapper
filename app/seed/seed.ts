const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function clean(model: string) {
  await prisma[model].deleteMany({});
}

async function createUser() {
  await clean('user');
  try {
    const user = await prisma.user.create({
      data: {
        name: 'Test User',
        email: 'test@example.com',
      },
    });

    console.log('User created:', user);
  } catch (error) {
    console.error('Error creating user:', error);
  } finally {
    await prisma.$disconnect();
  }
}

async function seedResume() {
  await clean('user');
  await clean('resume');
  try {
    const resume = await prisma.resume.create({
      data: {
        title: 'Test Resume',
        name: 'John Doe',
        email: 'john.doe@example.com',
        phoneNumber: '1234567890',
        address: '123 Main St',
        summary: 'Experienced software developer with a passion for coding.',
        portfolioLInk: 'https://portfolio.example.com',
        linkdinLink: 'https://www.linkedin.com/in/johndoe',
        user: {
          create: {
            name: 'John Doe',
            email: 'john.doe@example.com',
          },
        },
        webSiteUrl: {
          create: [
            { webSiteName: 'Personal Website', url: 'https://www.example.com' },
            { webSiteName: 'GitHub', url: 'https://github.com/johndoe' },
          ],
        },
        customField: {
          create: [
            { fieldName: 'Field 1', fieldValue: 'Value 1' },
            { fieldName: 'Field 2', fieldValue: 'Value 2' },
          ],
        },
        education: {
          create: [
            {
              degree: 'Bachelor of Science',
              university: 'Example University',
              year: 2020,
            },
            {
              degree: 'Master of Business Administration',
              university: 'Business School',
              year: 2022,
            },
          ],
        },
        experience: {
          create: [
            {
              title: 'Software Developer',
              company: 'XYZ Corporation',
              startDate: new Date('2020-01-01'),
              endDate: new Date('2022-12-31'),
              currentlyWorkHere: false,
              description: [
                'Developed web applications using JavaScript and React.',
              ],
            },
            {
              title: 'Intern',
              company: 'ABC Company',
              startDate: new Date('2019-06-01'),
              currentlyWorkHere: true,
              description: [
                'Assisted with software testing and quality assurance.',
              ],
            },
          ],
        },
        skill: {
          create: [
            { name: 'JavaScript' },
            { name: 'React' },
            { name: 'Node.js' },
          ],
        },
        project: {
          create: [
            {
              title: 'Project 1',
              liveLink: 'https://project1.example.com',
              githubLink: 'https://github.com/johndoe/project1',
              description: [
                'Implemented a REST API using Node.js and Express.',
              ],
            },
            {
              title: 'Project 2',
              liveLink: 'https://project2.example.com',
              description: [
                'Developed a responsive web application using React.',
              ],
            },
          ],
        },
        certification: {
          create: [
            {
              name: 'Certification 1',
              organization: 'Certification Organization',
              year: 2021,
            },
            {
              name: 'Certification 2',
              organization: 'Certification Provider',
              year: 2022,
            },
          ],
        },
        language: {
          create: [{ name: 'English' }, { name: 'Spanish' }],
        },
        reference: {
          create: [
            {
              name: 'Reference 1',
              position: 'Manager',
              company: 'ABC Company',
              contact: 'reference1@example.com',
            },
            {
              name: 'Reference 2',
              position: 'Supervisor',
              company: 'XYZ Corporation',
              contact: 'reference2@example.com',
            },
          ],
        },
      },
    });

    console.log('Resume created:', resume);
  } catch (error) {
    console.error('Error creating resume:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seedResume().catch((error) => {
  console.error('Error seeding resume:', error);
});

createUser().catch((error) => {
  console.error('Error seeding user:', error);
});
