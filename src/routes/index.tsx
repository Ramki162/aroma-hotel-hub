import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, ChevronRight, Clock3, MapPin, Minus, Plus, ShoppingBag, Sparkles, Star } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({ component: Index });

const dishes = [
  { name: "Saffron chicken biryani", detail: "Aromatic basmati, tender chicken, crisp onions", price: 24, category: "Signature", icon: "🍛" },
  { name: "Garden dosa", detail: "Crisp dosa, coconut chutney, tomato relish", price: 16, category: "Vegetarian", icon: "🥞" },
  { name: "Charred paneer", detail: "Smoked paneer, green chilli, herb yogurt", price: 18, category: "Vegetarian", icon: "🧀" },
  { name: "Mango cardamom kulfi", detail: "Seasonal mango, pistachio, rose sugar", price: 10, category: "Dessert", icon: "🍨" },
];

function Index() {
  const [category, setCategory] = useState("All");
  const [cart, setCart] = useState<typeof dishes>([]);
  const [reserved, setReserved] = useState(false);
  const filteredDishes = category === "All" ? dishes : dishes.filter((dish) => dish.category === category);

  const addDish = (dish: (typeof dishes)[number]) => setCart((current) => [...current, dish]);
  const removeDish = () => setCart((current) => current.slice(0, -1));

  return (
    <main className="min-h-screen overflow-hidden bg-[#0c0d0d] text-[#f8f3e9]">
      <nav className="mx-auto flex w-[min(1180px,92%)] items-center justify-between py-6">
        <a href="#top" className="text-lg font-black tracking-[0.18em]">AROMA <span className="text-[#e9ad45]">99</span></a>
        <div className="hidden gap-7 text-sm text-[#a8a39a] md:flex">
          <a href="#menu" className="transition hover:text-white">Menu</a>
          <a href="#offers" className="transition hover:text-white">Offers</a>
          <a href="#reserve" className="transition hover:text-white">Reservations</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="hidden text-[#aaa49a] sm:inline">Coimbatore</span>
          <button className="relative rounded-xl border border-white/15 bg-white/[.06] p-3" aria-label="View order">
            <ShoppingBag size={17} />
            {cart.length > 0 && <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-[#e9ad45] px-1 text-xs font-bold text-black">{cart.length}</span>}
          </button>
        </div>
      </nav>

      <section id="top" className="mx-auto grid w-[min(1180px,92%)] items-center gap-12 pb-24 pt-16 lg:grid-cols-[1.02fr_.98fr] lg:pt-24">
        <div>
          <p className="mb-5 flex items-center gap-2 text-xs font-bold uppercase tracking-[.24em] text-[#e9ad45]"><Sparkles size={14} /> Hotel dining, made memorable</p>
          <h1 className="max-w-xl font-serif text-6xl leading-[.94] tracking-[-.04em] sm:text-8xl">Good food.<br /><em className="text-[#e9ad45]">Great mood.</em></h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-[#aaa49a]">A warm table, bold flavours, and the comfort of your favourite room. Discover our all-day kitchen at AROMA 99.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="inline-flex items-center gap-2 rounded-xl bg-[#e9ad45] px-5 py-3 font-bold text-[#17130d] transition hover:-translate-y-1">Explore menu <ChevronRight size={17} /></a>
            <a href="#reserve" className="rounded-xl border border-white/15 bg-white/[.06] px-5 py-3 font-semibold transition hover:-translate-y-1 hover:bg-white/10">Reserve a table</a>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 text-xs text-[#bdb6aa]">
            <span className="rounded-xl border border-white/10 px-3 py-2"><Star className="mr-1 inline text-[#e9ad45]" size={13} /> 4.9 guest rating</span>
            <span className="rounded-xl border border-white/10 px-3 py-2"><Clock3 className="mr-1 inline text-[#e9ad45]" size={13} /> 07:00 - 23:00</span>
            <span className="rounded-xl border border-white/10 px-3 py-2">100% fresh</span>
          </div>
        </div>
        <div className="relative grid min-h-[390px] place-items-center rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_50%_35%,rgba(233,173,69,.36),transparent_34%),linear-gradient(135deg,#252019,#111313)] shadow-2xl shadow-black/40">
          <div className="absolute h-72 w-72 rounded-full bg-[#e9ad45]/20 blur-3xl" />
          <div className="relative text-[10rem] drop-shadow-2xl transition duration-500 hover:-translate-y-3 sm:text-[12rem]">🍛</div>
          <div className="absolute bottom-7 left-7 rounded-2xl border border-white/15 bg-black/25 px-4 py-3 backdrop-blur"><p className="text-xs text-[#aaa49a]">Tonight's favourite</p><strong>Saffron chicken biryani</strong></div>
          <div className="absolute right-7 top-7 rounded-2xl border border-white/15 bg-black/25 px-4 py-3 backdrop-blur"><strong className="text-[#e9ad45]">25-35 min</strong><p className="text-xs text-[#aaa49a]">to your room</p></div>
        </div>
      </section>

      <section id="menu" className="border-y border-white/10 bg-[#111313] py-20">
        <div className="mx-auto w-[min(1180px,92%)]">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5"><div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e9ad45]">The kitchen</p><h2 className="mt-2 font-serif text-5xl">Made to make you hungry.</h2></div><p className="max-w-md text-sm leading-6 text-[#aaa49a]">Familiar comfort food, sharpened with a little imagination and served with warm hospitality.</p></div>
          <div className="mb-7 flex gap-2 overflow-auto pb-2">{["All", "Signature", "Vegetarian", "Dessert"].map((item) => <button key={item} onClick={() => setCategory(item)} className={`whitespace-nowrap rounded-xl border px-4 py-2 text-sm transition ${category === item ? "border-[#e9ad45] bg-[#e9ad45]/15 text-[#f4c56f]" : "border-white/10 bg-white/[.04] text-[#aaa49a] hover:text-white"}`}>{item}</button>)}</div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{filteredDishes.map((dish) => <article key={dish.name} className="overflow-hidden rounded-2xl border border-white/10 bg-white/[.045] transition hover:-translate-y-1 hover:border-[#e9ad45]/50"><div className="grid h-44 place-items-center bg-[radial-gradient(circle,rgba(233,173,69,.24),transparent_58%),#191817] text-7xl">{dish.icon}</div><div className="p-4"><div className="flex justify-between gap-3 text-xs text-[#aaa49a]"><span>{dish.category}</span><span>₹{dish.price}</span></div><h3 className="mt-2 font-semibold">{dish.name}</h3><p className="mt-2 min-h-10 text-xs leading-5 text-[#aaa49a]">{dish.detail}</p><button onClick={() => addDish(dish)} className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-[#e9ad45]/40 bg-[#e9ad45]/10 py-2 text-sm font-bold text-[#f4c56f] transition hover:bg-[#e9ad45]/20"><Plus size={15} /> Add to order</button></div></article>)}</div>
          {cart.length > 0 && <div className="mt-6 flex items-center justify-between rounded-2xl border border-[#e9ad45]/40 bg-[#e9ad45]/10 p-4 text-sm"><span><ShoppingBag className="mr-2 inline text-[#e9ad45]" size={16} /> {cart.length} item{cart.length === 1 ? "" : "s"} ready for your room</span><button onClick={removeDish} className="flex items-center gap-1 text-[#f4c56f]"><Minus size={14} /> Remove last</button></div>}
        </div>
      </section>

      <section id="reserve" className="mx-auto grid w-[min(1180px,92%)] gap-10 py-20 lg:grid-cols-[.8fr_1.2fr]">
        <div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#e9ad45]">Dine in</p><h2 className="mt-2 font-serif text-5xl">Reserve your table.</h2><p className="mt-5 max-w-md leading-7 text-[#aaa49a]">Make the evening yours. Choose a time and we will have your favourite table ready.</p><div className="mt-8 flex items-center gap-3 text-sm text-[#aaa49a]"><MapPin size={17} className="text-[#e9ad45]" /> The Terrace, AROMA 99</div></div>
        <form onSubmit={(event) => { event.preventDefault(); setReserved(true); }} className="grid gap-4 rounded-3xl border border-white/10 bg-white/[.045] p-6 sm:grid-cols-2"><label className="text-sm text-[#aaa49a]">Date<input required type="date" className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-white" /></label><label className="text-sm text-[#aaa49a]">Time<select className="mt-2 w-full rounded-xl border border-white/10 bg-[#181a19] px-3 py-3 text-white"><option>7:30 PM</option><option>8:00 PM</option><option>8:30 PM</option></select></label><label className="text-sm text-[#aaa49a]">Guests<select className="mt-2 w-full rounded-xl border border-white/10 bg-[#181a19] px-3 py-3 text-white"><option>2 guests</option><option>4 guests</option><option>6 guests</option></select></label><label className="text-sm text-[#aaa49a]">Name<input required placeholder="Your name" className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-3 py-3 text-white placeholder:text-[#666]" /></label><button className="sm:col-span-2 rounded-xl bg-[#e9ad45] py-3 font-bold text-[#17130d] transition hover:bg-[#f4c56f]">{reserved ? "Table requested" : "Reserve table"}</button></form>
      </section>

      <footer id="contact" className="border-t border-white/10 py-8"><div className="mx-auto flex w-[min(1180px,92%)] flex-wrap justify-between gap-3 text-sm text-[#77736c]"><span>© 2026 AROMA 99</span><span className="flex items-center gap-2"><CalendarDays size={15} /> 123 Food Street, Coimbatore</span><span>hello@aroma99.example</span></div></footer>
    </main>
  );
}
