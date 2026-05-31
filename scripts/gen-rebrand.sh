#!/bin/bash
# Omorra rebrand image set (approved). Writes name:jobid to jobs-rebrand.txt
cd "$(dirname "$0")/../public/images/raw" || exit 1
: > jobs-rebrand.txt

S="Editorial photography for Omorra, a modern Indian wisdom house. Warm and meditative, palette of ivory cream, silk-scarf beige, burnt sienna and terracotta, dried sage green, stone walnut and espresso brown. Soft directional morning light, gentle long shadows, natural textures (raw plaster, handwoven cotton, stone, brass, ceramic, paper), matte film grade, fine grain, shallow depth of field, generous negative space, unmistakably Indian in roots and entirely modern in form, quiet luxury. Any printed text must be gently out of focus and not legible. No logos unless specified."

submit () { # name aspect ref prompt
  local name="$1" aspect="$2" ref="$3" prompt="$4" out id
  if [ -n "$ref" ]; then
    out=$(masonry image "$prompt" --model gpt-image-2 --aspect "$aspect" --ref "$ref" -o "$name.png" 2>&1)
  else
    out=$(masonry image "$prompt" --model gpt-image-2 --aspect "$aspect" -o "$name.png" 2>&1)
  fi
  id=$(printf '%s' "$out" | grep -oE '"job_id": "[^"]+"' | head -1 | grep -oE '[0-9a-f-]{36}')
  printf '%s:%s\n' "$name" "$id" >> jobs-rebrand.txt
  printf 'submitted %s -> %s\n' "$name" "$id"
}

submit hero-still 2:3 "" "$S A serene still life of a modern Indian morning ritual: a thick letterpress card propped against a small matte ceramic cup, a slim amber glass oil bottle beside it, a sprig of dried sage, arranged on handwoven silk-scarf-beige linen over a warm stone surface, burnt-sienna dawn light raking across the scene, vast calm negative space above. Gallery-like and editorial."

submit cat-wisdom 2:3 "" "$S A deck of thick letterpress cards with deckled edges, fanned slightly on a stone-walnut surface, the top card bearing a small embossed rosette motif, warm sienna light and soft shadow, meditative and tactile, a study in paper and ink."

submit cat-practice 2:3 "" "$S A hand-knotted meditation mala of dark sandalwood and rudraksha beads resting in a soft coil on dried-sage-green handwoven cloth, a single small brass bell beside it, quiet contemplative morning light, intimate and still."

submit cat-nourish 2:3 "" "$S An amber glass bottle of Ayurvedic body oil with a matte dropper, set on an ivory ceramic dish surrounded by a few marigold petals and dried herbs, warm dewy morning light, natural and nourishing."

submit story 3:2 "" "$S Soft golden morning light falling through an open doorway onto a warm raw-plaster wall and a stone threshold, a single handwoven mat and a low carved wooden stool inside, faint dust motes suspended in the light, the quiet feeling of a door left open, Indian in spirit, no people."

submit sku-cards 1:1 logo_monogram.png "$S A neat deck of Omorra wisdom cards bound with a burnt-sienna paper band embossed with the provided circular monogram, standing on an ivory seamless backdrop, soft directional light and gentle shadow, single-product hero."

submit sku-mala 1:1 logo_monogram.png "$S A hand-knotted sandalwood-and-rudraksha meditation mala arranged in a clean circle on an ivory seamless surface, finished with a small leather tab embossed with the provided circular monogram, soft directional light, single-product hero."

submit sku-oil 1:1 logo_wordmark.png "$S An amber glass Ayurvedic oil bottle with a matte dropper cap on an ivory seamless backdrop, a minimal printed label reading the wordmark 'OMORRA' in elegant serif exactly as provided, a few botanicals resting at the base, single-product hero."

echo "DONE submitting"; cat jobs-rebrand.txt
