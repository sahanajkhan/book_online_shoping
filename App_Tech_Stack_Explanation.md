# Book Online Shopping App - Tech Stack Explanation (Hinglish)

Yeh document aapke **Book Online Shopping App** mein use hone wali languages aur technologies ka ek brief explanation provide karta hai. Yeh application **MERN Stack** par based hai aur ismein mobile app capabilities bhi include ki gayi hain.

---

## 💻 Frontend Technologies (User Interface)

Frontend wo hissa hai jo users ko dikhta hai aur jisse wo interact karte hain.

1. **React.js (`react`, `react-dom`)**
   - **Kya hai:** Yeh ek popular JavaScript library hai jo user interfaces (UI) banane ke kaam aati hai.
   - **Kyun use kiya:** Isse app fast, interactive aur component-based banta hai (jaise navbar, book list, aur cart ke alag-alag reusable components).

2. **Vite (`vite`)**
   - **Kya hai:** Yeh ek modern aur super-fast frontend build tool hai.
   - **Kyun use kiya:** React app ko jaldi start karne aur production ke liye optimize karne mein madad karta hai. Yeh create-react-app ka ek tez alternative hai.

3. **Capacitor (`@capacitor/core`, `@capacitor/android`, `@capacitor/ios`)**
   - **Kya hai:** Yeh ek cross-platform tool hai jo web apps ko native mobile apps mein convert karta hai.
   - **Kyun use kiya:** Taki aap is React website ko aasani se **Android** aur **iOS** mobile application mein tabdeel kar sakein bina alag se Java ya Swift sikhe.

4. **React Router DOM (`react-router-dom`)**
   - **Kya hai:** Yeh React ke liye routing library hai.
   - **Kyun use kiya:** App mein bina page reload kiye ek page se dusre page (jaise Home se Cart ya Checkout par) navigate karne ke liye.

5. **Axios (`axios`)**
   - **Kya hai:** Yeh ek promise-based HTTP client hai.
   - **Kyun use kiya:** Frontend se backend server par data bhejne aur lene ke liye (API calls karne ke liye, jaise books ki list lana ya login request bhejna).

6. **Lucide React (`lucide-react`)**
   - **Kya hai:** Yeh ek icon library hai.
   - **Kyun use kiya:** App ko visually appealing banane ke liye modern aur clean icons ka use karne ke liye.

---

## ⚙️ Backend Technologies (Server & Database)

Backend app ka "brain" hota hai jo logic, data storage aur security handle karta hai.

1. **Node.js & Express.js (`express`)**
   - **Kya hai:** Node.js JavaScript ko server par run karne ka environment hai aur Express.js Node ka ek framework hai.
   - **Kyun use kiya:** Backend server banane, APIs (routes) likhne aur frontend ki requests ko process karne ke liye.

2. **MongoDB & Mongoose (`mongoose`)**
   - **Kya hai:** MongoDB ek NoSQL database hai aur Mongoose uske liye ek Object Data Modeling (ODM) library hai.
   - **Kyun use kiya:** App ka sara data (users ki details, books ki list, orders) store karne ke liye. Mongoose JavaScript objects ko database se connect karna aasan banata hai.

3. **BcryptJS (`bcryptjs`)**
   - **Kya hai:** Yeh ek password hashing library hai.
   - **Kyun use kiya:** Security ke liye. Jab user register karta hai, toh uske password ko encrypt (hash) karke database mein store kiya jata hai, taki agar database hack bhi ho jaye toh passwords safe rahein.

4. **JSON Web Token (`jsonwebtoken`)**
   - **Kya hai:** Yeh authentication ke liye ek standard tarika hai.
   - **Kyun use kiya:** User jab login karta hai, toh server ek token generate karke deta hai. Is token ka use karke app verify karta hai ki kaunsa user logged in hai aur usko konsa private data (jaise order history) dikhana hai.

5. **Nodemailer (`nodemailer`)**
   - **Kya hai:** Yeh Node.js ka module hai jo emails send karne ke kaam aata hai.
   - **Kyun use kiya:** App se automated emails bhejane ke liye, jaise signup confirmation, password reset links, ya order placement confirmation.

6. **Dotenv & CORS (`dotenv`, `cors`)**
   - **Dotenv:** Important secrets aur configuration (jaise Database URL, Email Passwords) ko `.env` file mein safe rakhne ke liye.
   - **CORS (Cross-Origin Resource Sharing):** Frontend (jo alag port par chal raha hai) ko backend API (jo alag port par chal rahi hai) se secure tarike se connect aur communicate karne ki permission dene ke liye.

---

**Summary:** 
Aapka app modern aur scalable technologies se bana hai. Frontend React aur Vite se fast banaya gaya hai, jise Capacitor se mobile par laya ja sakta hai. Backend Node aur Express par secure APIs provide kar raha hai, jiska data MongoDB mein safe rehta hai aur Nodemailer email features enable karta hai.
