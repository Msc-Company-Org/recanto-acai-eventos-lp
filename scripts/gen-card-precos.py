"""Gera o card de preços premium (PNG) para a Artemis enviar no WhatsApp. Sem IA — design controlado."""
from PIL import Image, ImageDraw, ImageFont
import os

W, H = 1080, 1350
PURPLE_TOP = (38, 12, 64)      # #260C40
PURPLE_BOT = (14, 4, 24)       # #0E0418
GOLD = (230, 184, 0)           # #E6B800
GOLD_SOFT = (255, 213, 74)
INK = (245, 240, 250)
MUTED = (189, 174, 198)
PRIMARY = (131, 39, 236)

def font(name, size):
    for p in (f"C:/Windows/Fonts/{name}", f"/usr/share/fonts/truetype/dejavu/{name}"):
        if os.path.exists(p):
            return ImageFont.truetype(p, size)
    return ImageFont.load_default()

F_WORD = font("arialbd.ttf", 34)
F_TITLE = font("georgiab.ttf", 70)
F_TITLE2 = font("georgiab.ttf", 70)
F_LABEL = font("arialbd.ttf", 33)
F_PRICE = font("arialbd.ttf", 78)
F_BADGE = font("arialbd.ttf", 26)
F_BODY = font("arial.ttf", 34)
F_FOOT = font("arialbd.ttf", 34)

img = Image.new("RGB", (W, H), PURPLE_BOT)
d = ImageDraw.Draw(img)
# gradiente vertical
for y in range(H):
    t = y / H
    r = int(PURPLE_TOP[0] + (PURPLE_BOT[0] - PURPLE_TOP[0]) * t)
    g = int(PURPLE_TOP[1] + (PURPLE_BOT[1] - PURPLE_TOP[1]) * t)
    b = int(PURPLE_TOP[2] + (PURPLE_BOT[2] - PURPLE_TOP[2]) * t)
    d.line([(0, y), (W, y)], fill=(r, g, b))

def ctext(y, txt, fnt, fill):
    w = d.textlength(txt, font=fnt)
    d.text(((W - w) / 2, y), txt, font=fnt, fill=fill)
    return y

ctext(70, "R E C A N T O   D O   A Ç A Í   ·   E V E N T O S", F_WORD, GOLD)
ctext(150, "Estação de Açaí", F_TITLE, INK)
ctext(225, "& Sorvete Gourmet", F_TITLE2, INK)
d.line([(W/2 - 60, 330), (W/2 + 60, 330)], fill=GOLD, width=4)

# Card 1 — Açaí ou Sorvete
d.rounded_rectangle([90, 380, 990, 560], radius=28, fill=(26, 11, 43), outline=(70, 40, 100), width=2)
d.text((130, 415), "AÇAÍ OU SORVETE", font=F_LABEL, fill=MUTED)
d.text((130, 460), "Escolha um e encante", font=F_BODY, fill=MUTED)
pw = d.textlength("R$ 1.490", font=F_PRICE)
d.text((960 - pw, 440), "R$ 1.490", font=F_PRICE, fill=INK)

# Card 2 — Combo (destaque)
d.rounded_rectangle([90, 590, 990, 800], radius=28, fill=(32, 8, 60), outline=GOLD, width=3)
d.rounded_rectangle([90, 590, 360, 640], radius=14, fill=GOLD)
d.text((118, 598), "MAIS PEDIDO", font=F_BADGE, fill=(20, 6, 36))
d.text((130, 665), "COMBO AÇAÍ + SORVETE", font=F_LABEL, fill=GOLD_SOFT)
d.text((130, 710), "Os dois — agrada todo mundo", font=F_BODY, fill=MUTED)
pw = d.textlength("R$ 1.690", font=F_PRICE)
d.text((960 - pw, 670), "R$ 1.690", font=F_PRICE, fill=GOLD)

# Inclusos
incs = ["Açaí e sorvete servidos na hora", "+15 acompanhamentos liberados",
        "Equipe uniformizada", "Insumos e logística inclusos"]
y = 870
for it in incs:
    d.ellipse([130, y + 8, 152, y + 30], outline=GOLD, width=3)
    d.line([(136, y + 19), (141, y + 25)], fill=GOLD, width=3)
    d.line([(141, y + 25), (148, y + 13)], fill=GOLD, width=3)
    d.text((175, y), it, font=F_BODY, fill=INK)
    y += 64

# Rodapé
d.rounded_rectangle([90, 1170, 990, 1270], radius=24, fill=PRIMARY)
ctext(1185, "Reserve sua data no WhatsApp", F_FOOT, (255, 255, 255))
ctext(1228, "Servido na hora pela nossa equipe  ·  Rio de Janeiro", F_BODY, (235, 225, 250))

out = os.path.join(os.path.dirname(__file__), "..", "public", "cards", "precos.png")
os.makedirs(os.path.dirname(out), exist_ok=True)
img.save(out, "PNG")
print("salvo:", os.path.abspath(out))
