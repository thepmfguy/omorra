#!/bin/bash
# Omorra catalog images (approved). Spiritual not religious. Wordmark-only branding, no symbols.
cd "$(dirname "$0")/../public/images/raw" || exit 1
: > jobs-catalog.txt

S="Editorial product photography for Omorra, a modern Indian wisdom-wellness house. Spiritual, NOT religious: absolutely no prayer beads, malas, bells, marigold flowers, idols, om or any religious symbols. Warm earthy palette of ivory cream, silk-scarf beige, burnt sienna and terracotta, dried sage green, stone walnut and espresso brown. Soft directional morning light, gentle shadows, natural textures (paper, stone, grass, ceramic, glass, linen), matte film grade, fine grain, shallow depth of field, generous negative space, quiet and premium. The ONLY branding permitted is the plain word OMORRA in a clean elegant serif; absolutely no logos, emblems, icons, monograms, watermarks, flowers, rosettes or decorative marks on any product or surface."

submit () { # name aspect prompt
  local name="$1" aspect="$2" prompt="$3" out id
  out=$(masonry image "$prompt" --model gpt-image-2 --aspect "$aspect" -o "$name.png" 2>&1)
  id=$(printf '%s' "$out" | grep -oE '"job_id": "[^"]+"' | head -1 | grep -oE '[0-9a-f-]{36}')
  printf '%s:%s\n' "$name" "$id" >> jobs-catalog.txt
  printf 'submitted %s -> %s\n' "$name" "$id"
}

submit wisdom-cards 2:3 "$S A deck of thick letterpress cards with softly deckled edges, fanned across a stone-walnut surface, the cards calm and uncluttered, one card showing only the small plain word OMORRA in elegant serif, warm sienna morning light and soft shadow, tactile and meditative. No emblems, flowers or icons of any kind."

submit practice-mat 2:3 "$S A yoga mat hand-woven from natural kusha grass, dried golden-green strands with visible organic weave, partially unrolled across a pale stone floor in a calm sunlit plaster room with a single potted plant nearby, earthy and grounded, the mat surface plain with no markings."

submit cat-nourish 2:3 "$S A calm skincare still life: a frosted glass mist bottle, a ceramic moisturizer jar and a soft tube of cleanser arranged with a sprig of green herbs on ivory linen over stone, soft morning light, the labels bearing only the plain word OMORRA in serif, natural and nourishing. No symbols."

submit sku-mist 1:1 "$S A frosted glass rose-water mist bottle with a slim matte cap on an ivory seamless backdrop, a single fresh pale rose bud resting beside it, a minimal label reading only the plain word OMORRA in elegant serif, soft directional light and gentle shadow, single-product hero."

submit sku-moist-women 1:1 "$S A women's face moisturizer in a frosted glass jar with a soft ivory and rosette-pink minimal label reading only the plain word OMORRA in elegant serif, a small sprig of greenery beside it, ivory seamless backdrop, soft light, single-product hero. No icons."

submit sku-moist-men 1:1 "$S A men's face moisturizer in a matte stone-grey and espresso glass jar with a clean minimal label reading only the plain word OMORRA in serif, grounded and austere, ivory seamless backdrop, directional light, single-product hero. No icons."

submit sku-wash-women 1:1 "$S A women's face wash in a frosted glass pump bottle with a light ivory-rosette minimal label reading only the plain word OMORRA in elegant serif, a sprig of greenery, ivory seamless backdrop, soft light, single-product hero. No symbols."

submit sku-wash-men 1:1 "$S A men's face wash in a dark matte espresso pump bottle with a clean minimal label reading only the plain word OMORRA in serif, grounded and masculine, ivory seamless backdrop, single-product hero. No symbols."

submit ritual-kit-her 3:2 "$S A premium open gift box in silk-scarf beige and soft rosette tones, lined with tissue, containing a frosted rose-water mist bottle, a small deck of wisdom cards, a frosted moisturizer jar and a frosted face-wash bottle, all with light labels reading only the plain word OMORRA, arranged neatly, warm morning light, luxurious unboxing still life. No emblems or symbols anywhere."

submit ritual-kit-him 3:2 "$S A premium open gift box in espresso and stone-walnut tones, lined with tissue, containing a frosted rose-water mist bottle, a small deck of wisdom cards, a matte dark moisturizer jar and a dark face-wash bottle, all with minimal labels reading only the plain word OMORRA, arranged neatly, warm directional light, luxurious unboxing still life. No emblems or symbols anywhere."

echo "DONE submitting"; cat jobs-catalog.txt
