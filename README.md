# Aroma Hotel Hub

from pathlib import Path
import zipfile, textwrap

root = Path("/mnt/data/aroma99")
root.mkdir(exist_ok=True)

html = r'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>AROMA 99 — Premium Food Experience</title>
<meta name="description" content="AROMA 99 premium hotel food ordering demo." />
<style>
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@600;700;800&display=swap');
:root{--bg:#090a0b;--panel:rgba(255,255,255,.075);--panel2:rgba(255,255,255,.11);--line:rgba(255,255,255,.13);--text:#f7f2e8;--muted:#a9a39a;--gold:#f4b84a;--gold2:#ffcf70;--danger:#ff7777;--green:#83d49a;--radius:24px}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:radial-gradient(circle at 80% 10%,rgba(244,184,74,.13),transparent 26%),radial-gradient(circle at 10% 35%,rgba(255,255,255,.045),transparent 25%),var(--bg);color:var(--text);font-family:"DM Sans",sans-serif;overflow-x:hidden}a{color:inherit;text-decoration:none}button,input,select,textarea{font:inherit}button{cursor:pointer}
body:before{content:"";position:fixed;inset:0;pointer-events:none;background:linear-gradient(115deg,transparent 0 45%,rgba(255,255,255,.018) 50%,transparent 55%);opacity:.7}
.container{width:min(1180px,92%);margin:auto}.glass{background:linear-gradient(135deg,rgba(255,255,255,.105),rgba(255,255,255,.045));border:1px solid var(--line);box-shadow:0 25px 70px rgba(0,0,0,.28);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px)}
header{position:fixed;z-index:50;top:16px;left:50%;transform:translateX(-50%);width:min(1160px,92%);border-radius:22px;padding:12px 16px;transition:.3s}.nav{display:flex;align-items:center;justify-content:space-between;gap:20px}.logo{font-weight:800;letter-spacing:.08em;font-size:18px}.logo span{color:var(--gold)}.navlinks{display:flex;gap:24px;color:#c9c4bb;font-size:14px}.navlinks a:hover{color:white}.nav-actions{display:flex;gap:8px}.iconbtn,.pillbtn{border:1px solid var(--line);background:rgba(255,255,255,.06);color:white;border-radius:14px;min-width:42px;height:42px}.pillbtn{padding:0 16px}.iconbtn:hover,.pillbtn:hover{background:rgba(255,255,255,.13);transform:translateY(-2px)}.badge{display:inline-flex;align-items:center;justify-content:center;min-width:19px;height:19px;padding:0 5px;border-radius:99px;background:var(--gold);color:#17120a;font-size:11px;font-weight:800;margin-left:-7px;margin-top:-25px}
.hero{min-height:820px;padding:150px 0 80px;display:grid;grid-template-columns:1.05fr .95fr;align-items:center;gap:30px}.eyebrow{color:var(--gold2);font-size:13px;letter-spacing:.18em;text-transform:uppercase;font-weight:700}.hero h1{font-family:"Playfair Display",serif;font-size:clamp(58px,8vw,104px);line-height:.92;margin:18px 0}.hero h1 em{color:var(--gold);font-style:normal}.hero p{color:var(--muted);font-size:18px;line-height:1.7;max-width:560px}.cta{display:flex;gap:12px;margin:28px 0}.primary{border:0;background:linear-gradient(135deg,var(--gold2),var(--gold));color:#17120a;font-weight:800;border-radius:15px;padding:14px 22px;box-shadow:0 12px 35px rgba(244,184,74,.18)}.secondary{border:1px solid var(--line);background:rgba(255,255,255,.06);color:white;border-radius:15px;padding:14px 22px}.primary:hover,.secondary:hover{transform:translateY(-3px)}.trust{display:flex;gap:10px;flex-wrap:wrap}.trust span{padding:10px 13px;border-radius:14px;color:#d9d2c6;font-size:12px}.hero-visual{position:relative;min-height:540px;display:grid;place-items:center}.orb{position:absolute;width:430px;height:430px;border-radius:50%;background:radial-gradient(circle at 40% 35%,#fff2c8 0 2%,#e8a938 8%,#9d5a12 35%,#28160a 68%,transparent 70%);filter:drop-shadow(0 45px 65px rgba(0,0,0,.65));animation:float 5s ease-in-out infinite}.plate{position:absolute;width:480px;height:180px;border-radius:50%;border:2px solid rgba(255,255,255,.2);background:radial-gradient(ellipse,rgba(255,255,255,.14),rgba(255,255,255,.025) 55%,transparent 56%);transform:rotateX(66deg) translateY(140px);box-shadow:0 40px 80px rgba(0,0,0,.5)}.foodemoji{position:relative;font-size:170px;filter:drop-shadow(0 30px 30px rgba(0,0,0,.45));z-index:2;animation:float 4s ease-in-out infinite reverse}.steam{position:absolute;font-size:80px;opacity:.2;top:70px;filter:blur(2px);animation:steam 4s infinite}.floatcard{position:absolute;padding:14px 16px;border-radius:17px;font-size:12px;z-index:5}.floatcard strong{display:block;font-size:16px;color:white}.fc1{right:5%;top:17%}.fc2{left:0;bottom:23%}.fc3{right:8%;bottom:10%}
section{padding:90px 0}.sectionhead{display:flex;justify-content:space-between;align-items:end;gap:20px;margin-bottom:30px}.sectionhead h2{font-family:"Playfair Display",serif;font-size:42px;margin:6px 0}.sectionhead p{color:var(--muted);max-width:530px}.categories{display:flex;gap:12px;overflow:auto;padding-bottom:8px}.cat{min-width:130px;padding:17px;border-radius:20px;color:#ddd;background:rgba(255,255,255,.045);border:1px solid var(--line);transition:.25s}.cat:hover,.cat.active{background:rgba(244,184,74,.12);border-color:rgba(244,184,74,.5);transform:translateY(-3px)}.cat b{display:block;font-size:25px;margin-bottom:9px}.cat small{color:#aaa}
.toolbar{display:flex;gap:10px;flex-wrap:wrap;margin:24px 0}.search{flex:1;min-width:230px;display:flex;align-items:center;gap:10px;padding:0 15px;border-radius:15px}.search input{width:100%;height:48px;border:0;outline:0;background:none;color:white}.select{height:48px;border-radius:15px;background:#161718;color:white;border:1px solid var(--line);padding:0 14px}
.grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}.card{border-radius:23px;overflow:hidden;transition:.3s;position:relative}.card:hover{transform:translateY(-7px);box-shadow:0 28px 60px rgba(0,0,0,.35)}.foodimg{height:190px;display:grid;place-items:center;font-size:105px;background:radial-gradient(circle at 50% 45%,rgba(244,184,74,.25),transparent 52%),linear-gradient(135deg,#201b16,#0d0e0f);position:relative}.foodimg:after{content:"";position:absolute;inset:18px;border-radius:50%;border:1px solid rgba(255,255,255,.08);transform:rotateX(60deg)}.veg{position:absolute;left:12px;top:12px;width:17px;height:17px;border:1px solid #74d68b;border-radius:4px}.veg:after{content:"";width:7px;height:7px;border-radius:50%;background:#74d68b;position:absolute;top:4px;left:4px}.tag{position:absolute;right:12px;top:12px;background:rgba(0,0,0,.45);padding:7px 9px;border-radius:10px;font-size:10px;color:#ffd67e}.cardbody{padding:17px}.cardbody .meta{display:flex;justify-content:space-between;color:#aaa;font-size:12px}.cardbody h3{margin:8px 0 5px;font-size:18px}.desc{font-size:12px;color:#9d9991;line-height:1.5;min-height:38px}.price{font-size:18px;font-weight:800}.old{text-decoration:line-through;color:#777;font-size:12px;margin-left:5px;font-weight:400}.cardbottom{display:flex;align-items:center;justify-content:space-between;margin-top:14px}.add{border:1px solid rgba(244,184,74,.45);background:rgba(244,184,74,.11);color:#ffd67e;border-radius:12px;padding:9px 12px;font-weight:700}.heart{position:absolute;right:12px;bottom:115px;border:0;background:rgba(0,0,0,.42);color:white;border-radius:50%;width:36px;height:36px}
.offergrid{display:grid;grid-template-columns:repeat(4,1fr);gap:15px}.offer{padding:24px;border-radius:23px;min-height:180px;position:relative;overflow:hidden}.offer:before{content:"";position:absolute;width:170px;height:170px;border-radius:50%;background:rgba(244,184,74,.15);right:-70px;bottom:-70px}.offer h3{font-family:"Playfair Display",serif;font-size:27px;margin:8px 0}.offer p{color:#aaa;font-size:13px}.code{display:inline-flex;padding:7px 10px;border-radius:9px;background:rgba(255,255,255,.08);font-size:11px;color:#ffd67e}
.split{display:grid;grid-template-columns:1fr 1fr;gap:25px}.feature{padding:32px;border-radius:27px}.feature h3{font-family:"Playfair Display",serif;font-size:35px;margin:8px 0 15px}.feature p{color:#aaa;line-height:1.8}.stats{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-top:25px}.stat{padding:20px;border-radius:18px;text-align:center}.stat strong{display:block;font-size:28px;color:var(--gold2)}.stat span{color:#999;font-size:12px}
.resform{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}.field{padding:13px 15px;border-radius:14px;background:rgba(255,255,255,.055);border:1px solid var(--line);color:white;outline:0;width:100%}.field::placeholder{color:#777}.resform textarea{grid-column:1/-1;min-height:100px;resize:vertical}
.contact{display:grid;grid-template-columns:1fr 1fr;gap:20px}.map{min-height:310px;border-radius:25px;position:relative;overflow:hidden;background:linear-gradient(135deg,#121819,#0a0d0e)}.map:before{content:"";position:absolute;inset:-20%;background:repeating-linear-gradient(25deg,transparent 0 45px,rgba(255,255,255,.07) 46px 48px),repeating-linear-gradient(115deg,transparent 0 60px,rgba(255,255,255,.05) 61px 63px);transform:rotate(-7deg)}.pin{position:absolute;left:54%;top:48%;font-size:38px;filter:drop-shadow(0 8px 10px #000)}
footer{padding:55px 0 90px;border-top:1px solid var(--line);color:#aaa}.footgrid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:30px}.footgrid h4{color:white}.footgrid a{display:block;margin:9px 0;font-size:13px}.footgrid a:hover{color:var(--gold2)}
.chatbtn{position:fixed;right:25px;bottom:25px;z-index:80;width:62px;height:62px;border-radius:22px;border:1px solid rgba(244,184,74,.55);background:linear-gradient(135deg,#f6c15c,#b66b12);box-shadow:0 15px 45px rgba(244,184,74,.22);font-size:25px}.chat{position:fixed;right:25px;bottom:98px;width:min(390px,calc(100% - 30px));height:550px;z-index:79;border-radius:26px;display:none;overflow:hidden}.chat.open{display:flex;flex-direction:column;animation:pop .25s ease}.chathead{padding:17px;display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--line)}.chathead strong{display:block}.online{font-size:11px;color:var(--green)}.messages{flex:1;overflow:auto;padding:16px}.msg{max-width:84%;padding:11px 13px;border-radius:16px;margin:8px 0;font-size:13px;line-height:1.5}.bot{background:rgba(255,255,255,.08);border:1px solid var(--line)}.user{margin-left:auto;background:rgba(244,184,74,.16);border:1px solid rgba(244,184,74,.25)}.quick{display:flex;gap:7px;flex-wrap:wrap;padding:0 15px 10px}.quick button{border:1px solid var(--line);background:rgba(255,255,255,.05);color:#ddd;border-radius:12px;padding:8px;font-size:11px}.chatinput{display:flex;gap:8px;padding:12px;border-top:1px solid var(--line)}.chatinput input{flex:1}.send{width:45px!important}
.cartdrawer{position:fixed;right:0;top:0;height:100%;width:min(430px,100%);z-index:100;transform:translateX(105%);transition:.35s;padding:20px;display:flex;flex-direction:column}.cartdrawer.open{transform:translateX(0)}.carthead{display:flex;justify-content:space-between;align-items:center}.cartitems{flex:1;overflow:auto;margin:15px 0}.cartitem{display:grid;grid-template-columns:58px 1fr auto;gap:12px;align-items:center;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.08)}.thumb{width:58px;height:58px;border-radius:14px;background:#191817;display:grid;place-items:center;font-size:28px}.qty{display:flex;align-items:center;gap:7px}.qty button{width:27px;height:27px;border-radius:8px;border:1px solid var(--line);background:rgba(255,255,255,.06);color:white}.summary{border-top:1px solid var(--line);padding-top:15px}.row{display:flex;justify-content:space-between;margin:8px 0;color:#aaa}.total{color:white;font-weight:800;font-size:19px}.backdrop{position:fixed;inset:0;background:rgba(0,0,0,.65);z-index:90;display:none}.backdrop.show{display:block}
.modal{position:fixed;inset:0;display:none;place-items:center;z-index:110;background:rgba(0,0,0,.72);padding:15px}.modal.show{display:grid}.modalbox{width:min(650px,100%);max-height:90vh;overflow:auto;border-radius:27px;padding:25px}.modalhead{display:flex;justify-content:space-between}.modalfood{display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:center}.bigfood{min-height:260px;display:grid;place-items:center;font-size:145px;border-radius:23px;background:radial-gradient(circle,rgba(244,184,74,.18),transparent 55%),#111}.detailchips{display:flex;gap:7px;flex-wrap:wrap}.chip{padding:7px 9px;background:rgba(255,255,255,.07);border:1px solid var(--line);border-radius:10px;font-size:11px;color:#bbb}
.toast{position:fixed;left:50%;bottom:25px;transform:translate(-50%,130px);z-index:200;background:#171819;border:1px solid var(--line);padding:13px 18px;border-radius:14px;transition:.3s;box-shadow:0 15px 40px #000}.toast.show{transform:translate(-50%,0)}
.mobilebar{display:none}
@keyframes float{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-16px) rotate(2deg)}}@keyframes steam{0%{transform:translateY(30px) scale(.8);opacity:0}40%{opacity:.25}100%{transform:translateY(-80px) scale(1.2);opacity:0}}@keyframes pop{from{opacity:0;transform:translateY(15px) scale(.97)}to{opacity:1;transform:none}}
@media(max-width:950px){.navlinks{display:none}.hero{grid-template-columns:1fr;padding-top:145px}.hero-visual{min-height:460px}.grid{grid-template-columns:repeat(2,1fr)}.offergrid{grid-template-columns:repeat(2,1fr)}.split,.contact{grid-template-columns:1fr}.footgrid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:600px){section{padding:65px 0}.hero{min-height:auto;padding-top:125px}.hero h1{font-size:58px}.hero p{font-size:15px}.hero-visual{min-height:370px}.orb{width:290px;height:290px}.plate{width:340px;height:130px}.foodemoji{font-size:110px}.floatcard{font-size:10px}.fc1{right:0}.fc2{left:0}.grid{grid-template-columns:1fr 1fr;gap:10px}.foodimg{height:145px;font-size:76px}.cardbody{padding:12px}.cardbody h3{font-size:14px}.desc{font-size:10px}.price{font-size:15px}.offergrid,.stats{grid-template-columns:1fr 1fr}.resform{grid-template-columns:1fr}.resform textarea{grid-column:auto}.footgrid{grid-template-columns:1fr 1fr}.sectionhead h2{font-size:32px}.mobilebar{position:fixed;display:flex;z-index:60;bottom:10px;left:50%;transform:translateX(-50%);width:calc(100% - 25px);padding:8px;border-radius:20px;justify-content:space-around}.mobilebar a{font-size:11px;color:#aaa;text-align:center}.mobilebar b{display:block;font-size:18px}.chatbtn{right:18px;bottom:82px}.chat{right:15px;bottom:150px;height:500px}.cartdrawer{padding:15px}.modalfood{grid-template-columns:1fr}}







    AROMA 99
    

HomeMenuOffersReservationsAboutContact


    

⌕♡🛒0






    

Premium hotel dining • Coimbatore


    

Good Food.
Great Mood.


    

Freshly prepared favourites, crafted with bold flavours and delivered straight to your doorstep.


    

Explore Menu →Reserve a Table


    

★ 4.9 Rating25–35 min Delivery100% Fresh₹299 Avg. Order


    

♨

🍛


    

4.9 ★Guest favourite


    

25–35 minHot delivery


    

₹299Average order





Explore the kitchen

Made to make you hungry.

Discover crowd favourites, comfort classics and chef specials. Everything below is dummy data ready for a real backend later.


    

⌕


    RecommendedTop RatedPrice Low → HighPrice High → Low
    AllVegNon-Veg





Limited-time treats

Offers worth craving.


    

AROMA20

20% OFF

Flat discount on your next flavour-filled order.

Copy Code


    

SAVE100

₹100 OFF

Valid on orders above ₹499.

Copy Code


    

SWEET99

Free Dessert

Get a dessert on orders above ₹799.

Copy Code


    

FIRST150

₹150 OFF

Welcome offer for your first Aroma 99 order.

Copy Code






    

Our story

Tradition meets a modern table.

At Aroma 99, we combine familiar Indian comfort food with a contemporary dining experience. Our fictional kitchen is built around fresh ingredients, warm hospitality and dishes designed to travel beautifully.

15+Years

50K+Guests

100+Dishes

4.8★Average


    

Guest love

“The biryani arrived hot, aromatic and perfectly balanced.”

— Priya S.

“Fast delivery and the dosa was excellent.”

— Arun K.

“One of the best comfort-food experiences recently.”

— Meena R.






    

Dine in

Reserve your table.

Choose your preferred time and seating. This demo generates a booking ID locally.


    


      
      
      2 Guests3 Guests4 Guests6 Guests8 Guests
      IndoorOutdoorPrivate Dining
      
      Reserve Table ✦
    





Find us

Come hungry. Leave happy.


    

AROMA 99 Restaurant

123 Food Street,
Coimbatore, Tamil Nadu, India

☎ +91 98765 43210
✉ hello@aroma99.example



Open daily
11:00 AM – 11:00 PM



Get Directions
    

📍


  





AROMA 99

Where Every Bite Tells a Story.

Explore

MenuOffersReservationsAbout

Support

Track OrderHelp CenterRefund PolicyPrivacy

Follow

InstagramFacebookYouTube

UPI • Cards • COD • Wallet

© 2026 Aroma 99. All rights reserved. Demo website.



⌂Home⌕Search◷Orders♡Favs🛒Cart

✦

AROMA AI● Online • Menu assistant

×

Hi! I'm Aroma AI 👋
Tell me what you're craving and I'll help you choose.

🌶️ Spicy🥗 Healthy💰 Under ₹300🍰 Sweet

➤





Your order

Cart

×

Subtotal₹0

Discount-₹0

Delivery₹40

Taxes₹0

Total₹0

Proceed to Checkout →







'''

(root/"index.html").write_text(html, encoding="utf-8")
(root/"README.txt").write_text("""AROMA 99 — Premium Hotel Food Ordering Demo

Run:
1. Open index.html directly in a browser, OR
2. Use VS Code Live Server for the best experience.

Features:
- Premium glassmorphism UI
- Responsive desktop/mobile layout
- Dummy food menu with 20 dishes
- Search, category filtering, sorting, Veg/Non-Veg filtering
- Favorites using localStorage
- Functional cart using localStorage
- Checkout/payment simulation
- Order tracking simulation
- Table reservation simulation
- AI-style local food chatbot
- Offers and coupon copy
- Pseudo-3D hero food visual with CSS fallback
- Mobile bottom navigation
""", encoding="utf-8")

zip_path=Path("/mnt/data/AROMA99_Hotel_Food_Website.zip")
with zipfile.ZipFile(zip_path,"w",zipfile.ZIP_DEFLATED) as z:
    for p in root.iterdir():
        z.write(p, p.name)

print(f"Created: {zip_path}")
print(f"Main file: {root/'index.html'}")

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f1d171b2-9c62-4ee4-8c62-9ce826d716a0).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
