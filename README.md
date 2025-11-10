# 🌱 AgriSchedule

**AgriSchedule** is a community farm management web app built for **Porters Community Farm** in Gainesville, FL.  
It simplifies **volunteer scheduling**, **inventory tracking**, and **farm communications** — helping local farms and non-profits manage resources more efficiently.

---

## 🚀 Getting Started

Be sure that the terminal path is for the project, not just the repository folder. You may need to execute ```cd .\agri-schedule``` before the other commands.

**Step 1.** Run ```npm install``` to install dependencies.

**Step 2.** Create a ```.env``` file in which to store values of both *AWS Database* and *Cognito*.

```bash
# Amazon AWS Database
DATABASE_URL="mysql://admin:3GB84Sl58V5Az8vJQTgy@database-1.crqegig6o0qv.us-east-2.rds.amazonaws.com:3306/database-1"
```

```bash
# Amazon Cognito
USER_POOL_ID="us-east-2_LdWryHu94"
CLIENT_ID="6m7lm83q4htso0s0hhfuf41shn"
```

**Step 3.** Run ```npm run dev``` to start the website.

**Step 4.** Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

---

## 📟 Navigating Databases

The database architecture consists of three main components: **Prisma** (already installed in the above section), **Amazon AWS Relational Database**, and **Amazon Cognito**.

### Prisma
This is used within our source code on the *backend layer* to store data on and retrieve data from the *database layer* by linking to our **Amazon AWS Relational Database** (this is what the URL in the ```.env``` is used for).

In a separate terminal tab, execute ```npx prisma studio```, being sure you are in the project directory - not the top repository. This will automatically open a locally hosted website on your browser to view *database layer* data. This is where data fields (like a user's Role) can be manually changed.

### Amazon AWS Relational Database
This is used to actually store the data for our wesbite that **Prisma** pulls from for displaying. Search online for "AWS" and at the top right, "Sign in to console" with the appropriate credentials. There, you can navigate to the database as needed; however, most changes would probably be made through **Prisma** as described above.

### Amazon Cognito
This is used for registering users, signing them in, and creating session tokens to be passed around the *frontend layer* and *backend layer*. Search online for "AWS", and at the top right "Sign in to console" with the appropriate credentials. There, you can navigate to the Cognito section as needed. On the left, will find the *User pool*. This stores all of the users but in a different way than our **AWS Database**. Firstly, it is important to note that this is **not** connected to **Prisma** (and thus the **AWS Database**); if you delete a user here, it will not delete it from the database and vice versa. In the User pool, you can manually confirm users that have not verified their emails (for testing fake ones). To do this, select a Username (the random string next to a user's email); on the top right, there is an "Actions" button, and there you can confirm the user.

---

## 🧩 Project Overview

### 🎯 Purpose
Porters Community Farm currently manages volunteers and inventory manually through spreadsheets and ad-hoc communication.  
**AgriSchedule** centralizes those systems into a user-friendly platform.

### ✳️ Core Features
- 🧑‍🌾 **Volunteer Scheduling** – Admins can post farm work shifts; volunteers can sign up, check in/out, and track their hours.  
- 🧺 **Inventory Management** – Track farm tools, seeds, and produce, including conditions and quantities.  
- 🧍‍♀️ **User Profiles** – Volunteers see their contribution history; admins view overall attendance and inventory reports.  
- 📣 **Communication Tools** – Provide updates and reminders about shifts, tasks, or equipment needs.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|:------|:--------------|
| **Frontend** | [Next.js 15](https://nextjs.org), React 19, TypeScript |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) |
| **Fonts** | [Geist Sans](https://vercel.com/font) & Geist Mono |
| **Auth (planned)** | [NextAuth.js](https://next-auth.js.org) (Google / GitHub providers) |
| **Deployment** | [Vercel](https://vercel.com) |
| **Database** | Amazon AWS RDS / MySQL / Prisma ORM |

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs) – learn about Next.js features and API.  
- [Tailwind CSS Docs](https://tailwindcss.com/docs) – utility-first CSS framework.  
- [NextAuth.js Guide](https://next-auth.js.org) – authentication for Next.js.  
- [Vercel Deployment Docs](https://vercel.com/docs) – deploy your Next.js project easily.

---

## 💚 Credits

Developed by the **Code Harvest** team of **Leonardo Fernandez**, **Lilian Lusvardi**, and **Christopher Oeltjen** at the **University of Florida**  
for **Porters Community Farm**, Gainesville, FL.  

> “Grow together.” 🌱
