# Putting The Long Way Home online with GitHub Pages (free, ~5 minutes)

This gives you a permanent public link like `https://YOUR-NAME.github.io/the-long-way-home/`. It works for teammates, for a VR headset (it's https), and for submitting.

1. **Create a GitHub account** at github.com if you don't have one.
2. **Create a new repository.** Click **+** (top right), then **New repository**.
   - Repository name: `the-long-way-home`
   - Choose **Public**.
   - Click **Create repository**.
3. **Upload the website files.** On the new repo page, click **uploading an existing file**.
   - Open the **`site-public`** folder on your computer (the protected, compressed version), select **everything inside it** (`index.html`, `app.min.js`, `style.min.css`, `audio`, `.nojekyll`) and drag it into the browser window. Upload what's inside the folder, not the folder itself. Don't upload `site`, which is your editable source code.
   - Wait for the uploads to finish, then click **Commit changes**.
4. **Turn on Pages.** In the repo, go to **Settings**, then **Pages** (left menu).
   - Under "Build and deployment", set **Source** to **Deploy from a branch**.
   - Set **Branch** to `main` and the folder to `/ (root)`, then click **Save**.
5. **Wait 1–2 minutes** and refresh the Pages settings page. The link appears at the top: **Your site is live at https://YOUR-NAME.github.io/the-long-way-home/**

## Updating it later
After the game changes, open the repo, click **Add file**, then **Upload files**, and drag everything inside `site-public` in again (ask Claude to rebuild `site-public` after changes). Click **Commit changes**. The site updates in about a minute.

## Let Claude do the uploading
In claude.ai go to **Settings**, then **Connectors**, and connect **GitHub**. Then tell Claude the repo name (e.g. `your-name/the-long-way-home`). Claude can push the files and you won't need to drag anything.
