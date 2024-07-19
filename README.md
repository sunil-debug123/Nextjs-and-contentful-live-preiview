## Next.js App with Contentful Live Preview
This project demonstrates a Next.js application seamlessly integrated with Contentful's Live Preview functionality. 
It empowers content editors to make real-time changes and see their impact immediately, streamlining the content creation process.

**Vercel Link**: https://nextjs-and-contentful-live-preiview.vercel.app/

## Getting Started

1. Clone the Repository:

```bash
git clone https://github.com/sunil-debug123/Nextjs-and-contentful-live-preiview.git
```

2. Install Dependencies: Navigate to the project directory and install required packages:

```bash
npm install
```

3. Contentful Login:
    - Log in to your Contentful account through the CLI:
    - ```bash
        contentful login
      ```
    - List your existing Contentful spaces to identify the one you want to use:
    - ```bash
        contentful space list
        contentful space use
      ```

4. Update Configuration:
   - Open ./contentful/import/config.json in a text editor.
   - Replace YOUR_SPACE_ID with your Contentful space ID obtained from step 4.
   - Replace YOUR_CONTENTFUL_MANAGEMENT_TOKEN with your Contentful Management API token, which can be found in your Contentful space settings under "API Keys".
   - Create .env file and place all the needed keys which are mentioned in .env-exmaple.
  
5. Import Content (Optional):
   - If you are new to contentful and then you can import the dummy content in your contentful By following command.
    - ```bash
        contentful space import --config ./contentful/import/config.json
      ```

6. Setup Live Preview Link:

In your Contentful space settings, navigate to the "Content Preview" section.

![Screenshot 2024-07-19 at 6 26 53 PM](https://github.com/user-attachments/assets/687dba79-1071-4cf0-9de2-8c5f74ba55ba)

"Add preview URL" to define a unique preview URL of your Next.js application to enable Live Preview.



7. Access Live Preview:

In your Contentful space, while editing entries, you should now see a "Live Preview" button in the sidebar.

![Screenshot 2024-07-19 at 6 27 51 PM](https://github.com/user-attachments/assets/affef8f9-0e16-47ad-9800-b856cbc087b4)



Clicking this button will open the edited content in your Next.js application's preview URL, enabling you to see the changes reflected in real-time.

![Screenshot 2024-07-19 at 6 28 14 PM](https://github.com/user-attachments/assets/bb5d94bb-92fc-438e-9709-457459f71a1d)



# Help and Support
For any help and support regarding this repository, feel free to connect with me. I will be happy to assist you.
  - Email: sunil31725@gmail.com
Let me know if you need any more changes!
    

# License
This project is licensed under the MIT License. See the LICENSE file for details.

