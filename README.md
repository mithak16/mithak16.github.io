# Lakshmi's TV portfolio

A responsive portfolio in plain HTML, CSS, and JavaScript. No framework,
installation, build command, external fonts, or API keys are needed.

## Open it

Unzip this folder, then double-click `index.html` in Safari, Chrome, or Firefox.
Keep the files and the `assets` folder together.

## Make it yours

1. Open `config.js` in your editor and add your email, GitHub, LinkedIn,
   résumé, and optional project/research links. Unset links are hidden.
2. For your résumé, put a PDF in `assets` and set `resume: "assets/resume.pdf"`.
3. Edit the five section blocks in `index.html` to update your introduction,
   projects, research, and community work. The included copy is a starting
   draft based on the information provided, not a claim of published research.
4. Change the shared color variables at the top of `styles.css` if desired.
5. Your supplied background is in `assets/moon.jpeg`. The
   wallpaper rules at the end of `styles.css` rotate it 90 degrees
   counterclockwise without modifying the original
   image. It fills the viewport; narrower screens naturally show less of
   the sides. The generated cat has been removed.

The supplied LinkedIn profile is linked from the icon on Home, above Snoopy.
There is no Contact channel or contact form. The résumé link appears when
configured. Review Experience and In Media text before publishing.

## Files

- `index.html`: structure and channel content
- `styles.css`: TV, remote, desktop/tablet/phone layouts, motion and print styles
- `script.js`: channel switching, browser history, keyboard support, link wiring
- `config.js`: personal URLs and email
- `assets/moon.jpeg`: your supplied moon background
- `assets/snoopy-skating.png`: background-removed skating illustration

## Responsive behavior

- The TV is centered with a separate remote beneath it at all widths.
- Above 850px, the remote has five channel buttons in one row.
- 601–850px: three columns of buttons. 600px and below: two columns.
- On phones, the TV grows with its content and the whole page scrolls normally.
- On desktop, longer channel content scrolls inside the screen.
- Phone buttons are at least 44px high.
- The full black TV frame and buttons use flat solid colors, with no gradients
  or embossed shadows. The reference-inspired dark header and light content
  area keep the interface simple; supplied Snoopy artwork remains behind it.

## Navigation and accessibility

Click a labeled remote button, CH − / CH +,  to change channels.
Tab moves through interactive controls. With a channel button focused, arrow
keys switch channels; Home and End select the first and last channels.
Each section has a URL hash (for example `#projects`), and browser Back/Forward
restores channel history. A skip link and visible focus indicators are included.
Screen readers get the selected-button state and a short channel announcement.
Reduced-motion settings disable the subtle switching animation and dial motion.
Without JavaScript, all five sections are readable. Printing shows every section.

## Put it on GitHub Pages

Copy the contents of this folder into the folder your GitHub Pages site serves.
`index.html` must be at that publishing folder's root. Preserve relative paths
and the assets folder. This package does not change or deploy an existing repo.

## Checks

JavaScript syntax, local assets, section/button matching, and channel behavior
were checked during creation. Physical-device and Safari browser testing has
not been performed. Before publishing, check the page in your own browser at
small phone, tablet, and desktop widths, including larger text settings.

## V4: translucent TV and Snoopy animation

The supplied moon image fills the viewport, rotated to landscape as before.
The screen has an 80% opaque light fill; lower `.screen` background alpha at
V4 in styles.css to show more of the moon. All four frame sides are solid black.
Side controls have been removed; the remote still switches channels.

Snoopy and Woodstock glide across a dedicated lane inside the bottom frame.
The image travels from the left edge to the right without clipping, then resets
immediately. The loop takes 22 seconds on desktop and 16 on phones. Adjust
`snoopy-skate` animation duration to change speed. This moves the supplied pose;
it is not a frame-by-frame leg animation. The button in the header pauses it.
Reduced-motion settings show a stationary Snoopy. No JavaScript timer is needed.

The illustration's white exterior was removed using an image editing tool;
the supplied original pose and character colors are retained in the cutout.

## V5 changes

Channels: Home, Experience, Projects, Research, In Media.
Skating Snoopy, the pause control, and LinkedIn contact appear only on Home.
Projects and Research show "Under Build" with the supplied computer Snoopy.
The computer illustration is static; a still image does not contain separate
finger-animation frames. The supplied artwork files are unchanged.
The remote and its buttons are black. Supplied rewind arrows control previous
and next channels (the next arrow is rotated in CSS). The top tagline is gone.
The LinkedIn icon opens https://www.linkedin.com/in/lakshmi-katrapati/ in a new tab.

## V6 changes

Home reads "Hey! I'm Lakshmi" and "CS @ George Mason", with the larger
LinkedIn icon immediately below. The icon itself is the link; there is no
adjacent label. Skating Snoopy remains at the bottom of Home. The tagline
and Now playing row are removed. Footer text is exactly "@2026 Katrapati".

## V7: Projects GIF

Projects now says "Work In Progress" and uses the supplied Tenor typing GIF,
bundled locally in assets/snoopy-typing.gif. Research is unchanged.
Reduced-motion users see the still computer illustration instead.
Source: https://tenor.com/vFGBLqDRumJ.gif

If you already customized your local styles.css (font, text position, skating
speed), KEEP THAT FILE. For this update, copy only index.html and the new
assets/snoopy-typing.gif into your existing folder. CSS and scripts did not
change from V6. This preserves those local CSS customizations.

## V8: combined Projects + Research

Channel 3 is now Projects + Research, with the Work In Progress GIF.
The separate Research tab is removed and In Media is channel 4.
Old #research links open the combined channel.
If preserving local font/position/speed edits, copy index.html and script.js,
then copy only the V8 CSS block from the end of this styles.css to the end of
your own styles.css. Keep assets/snoopy-typing.gif from V7.
