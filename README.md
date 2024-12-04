# DekHor!
This mini-project is part of software development practice 2, mainly towards project management and workflow integrations. We combines multiple projects altogether, some are from previous subject and some are rewritten, with addition of central portal to access application, including:
- **DekHor Blogs**: An application that user can write blogs
- **DekHor Dorms**: Helps user find dorm near university that they like
- **DekHor Eats**: Let users posts about food

<p align="center">
    <img src="https://img.shields.io/github/contributors/NickKhunapoj/dekhor-portal?color=dark-green"> <img src="https://img.shields.io/github/stars/NickKhunapoj/dekhor-portal?style=social"> <img src="https://img.shields.io/github/license/NickKhunapoj/dekhor-portal">

## Deployment
To deploy this whole projects, you will need
- Supabase
- 1 Cluster running Kubernetes
- Sentry (I'm trying to remove this but I can't)
- A github account
- Container register
You may begin with /helm folder and github action file to get the sense of the environment variable and secret you need.
For sentry, you must create 1 Sentry project for each of sub-project. The total Sentry project will be 8. This must be configure before deploying, otherwise it will fail.

## Previews (Portal and Dorms section)
<img align="center" alt="Screenshot 2567-12-03 at 17 06 32" src="https://github.com/user-attachments/assets/7c974dfa-f977-48b2-8c91-c1659781e0ad">
<img align="center" alt="Screenshot 2567-12-03 at 17 06 32" src="https://github.com/user-attachments/assets/2a78e1c7-cf3c-4511-8375-b00f0700e150">
<img align="center" alt="Screenshot 2567-12-03 at 17 06 32" src="https://github.com/user-attachments/assets/bc0e221a-735b-4ca4-abc5-16ce1595cb81">
<img align="center" alt="Screenshot 2567-12-03 at 17 06 32" src="https://github.com/user-attachments/assets/e98e1c3b-ede1-4f7c-9504-73b2a2c95974">

## My contribution
- Co-designed the main portal page for the DekHor Portal.
- Developed the frontend for adding and editing dorms in DekHor Dorms.
- Enhanced the frontend of the food information page for DekHor Eats.
- Created both the frontend and backend of the admin portal for user support, including replying to and communicating with users.

## Folder Structure
The project is structured as follows:
```
root/
│
├── hornaidee/ # Contains DekHor Dorms source code
│ ├── web/
│ └── server/
│
├── MarketConnect/ # Contains DekHor Markets source code
│ ├── web/
│ └── server/
│
├── super-app/ # Contains portal source code
│ ├── web/
│ └── server/
│
└── TuachuayDekHor/ # Contains DekHor Blogs source code
  ├── web/
  └── server/
```
