#!/bin/bash
# Submits the new hero still + per-SKU gallery images. Writes name:jobid to jobs.txt
cd "$(dirname "$0")/../public/images/raw" || exit 1
: > jobs.txt

S="Editorial product photography for Omorra, a quiet-luxury wellness house in the register of Aesop, Frama and Aman. Warm bone off-white seamless or raw-plaster setting, soft directional dawn light, gentle architectural shadows, dewy blush-clay and dusty-rose palette, matte film grade, fine grain, shallow depth of field, generous negative space, ultra premium, no text unless specified."

submit () { # name aspect ref prompt
  local name="$1" aspect="$2" ref="$3" prompt="$4"
  local out
  if [ -n "$ref" ]; then
    out=$(masonry image "$prompt" --model gpt-image-2 --aspect "$aspect" --ref "$ref" -o "$name.png" 2>&1)
  else
    out=$(masonry image "$prompt" --model gpt-image-2 --aspect "$aspect" -o "$name.png" 2>&1)
  fi
  local id
  id=$(printf '%s' "$out" | grep -oE '"job_id": "[^"]+"' | head -1 | grep -oE '[0-9a-f-]{36}')
  printf '%s:%s\n' "$name" "$id" >> jobs.txt
  printf 'submitted %s -> %s\n' "$name" "$id"
}

# Hero stills (portrait, framed) — two options
submit hero-still-a 2:3 logo_monogram.png "$S A neatly rolled rose-water yoga mat in soft blush-clay standing upright and leaning against a raw pale-plaster wall, a long soft diagonal shadow cast across the wall, a single dried Damask rose lying on the floor beside it, vast calm negative space above, the provided circular rose-monogram debossed into a slim leather band on the mat. Architectural, serene, gallery-like."
submit hero-still-b 2:3 logo_monogram.png "$S The rose-water mat partially unrolled and draped over a sculptural travertine bench, soft folds, morning light raking across the stone, one rose stem resting on top, the provided circular rose-monogram debossed into the mat corner, abundant empty space, museum-quiet composition."

# The Mat — detail + context
submit mat-detail 1:1 logo_monogram.png "$S Extreme close-up macro of the rose-water mat surface in blush-clay, fine matte rubber texture catching soft light, the provided circular rose-monogram debossed crisply into the corner, a faint dewy sheen, abstract and tactile."
submit mat-context 3:2 logo_monogram.png "$S The blush-clay rose-water mat unrolled across the floor of a calm sunlit room with raw plaster walls and a single potted olive branch, soft long shadows, lived-in serenity, wide architectural composition, the provided monogram subtly debossed in a corner."

# The Mist — detail + context
submit mist-detail 1:1 logo_wordmark.png "$S Macro close-up of a frosted glass rose-water mist bottle, brushed matte cap and fine spray nozzle, a single suspended droplet, the printed wordmark 'OMORRA' in elegant serif exactly as provided on the frosted glass, dewy and precise."
submit mist-context 3:2 logo_wordmark.png "$S The frosted rose-water mist bottle resting on a pale stone ledge beside scattered fresh Damask rose petals and a folded linen cloth, soft morning light, the wordmark 'OMORRA' visible on the label as provided, calm still life."

# The Wrap — detail + context
submit wrap-detail 1:1 logo_monogram.png "$S Macro close-up of woven long-staple cotton in warm bone and blush stripes, soft natural weave texture, a small leather tab embossed with the provided circular rose-monogram, tactile and quiet."
submit wrap-context 3:2 logo_monogram.png "$S The woven bone-and-blush cotton practice wrap draped softly over a pale wooden bench in a sunlit plaster room, natural folds, a small embossed leather tab with the provided monogram, serene editorial composition."

# The Block — detail + context
submit block-detail 1:1 logo_monogram.png "$S Macro close-up of honey-toned Portuguese cork grain, the provided circular rose-monogram cleanly debossed into the surface, warm raking light revealing texture, sculptural and minimal."
submit block-context 3:2 logo_monogram.png "$S A honey cork rose-support block placed on a blush-clay mat in a calm sunlit studio, a soft linen draped nearby, gentle shadows, the provided monogram debossed on the block face, peaceful in-use context."

echo "DONE submitting"; cat jobs.txt
