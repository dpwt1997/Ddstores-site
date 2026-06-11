<!DOCTYPE html>
<html lang="pt">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DD STORES</title>

    <style>
        body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #f5f5f5;
        }

        header {
            background: black;
            color: white;
            padding: 20px;
            text-align: center;
            font-size: 28px;
            font-weight: bold;
        }

        .products {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            padding: 20px;
        }

        .product-card {
            background: white;
            border-radius: 10px;
            padding: 15px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            text-align: center;
        }

        .product-card img {
            width: 250px;
            height: auto;
            border-radius: 10px;
            display: block;
            margin: 0 auto;
        }

        .product-name {
            font-size: 20px;
            font-weight: bold;
            margin-top: 10px;
        }

        .product-desc {
            color: #555;
            margin: 10px 0;
        }

        .product-cta {
            background: black;
            color: white;
            padding: 10px;
            text-align: center;
            border-radius: 5px;
            margin-top: 10px;
            cursor: pointer;
        }
    </style>
</head>

<body>

<header>DD STORES — Perfumes Importados</header>

<section class="products">

    <!-- TOBACCO VANILLE -->
    <div class="product-card">
        <img src="WhatsApp Image 2026-06-07 at 21.15.59 (2).jpeg" alt="Tobacco Vanille">
        <div class="product-name">Tobacco Vanille</div>
        <p class="product-desc">Um perfume intenso, quente e sofisticado. Perfeito para noites especiais.</p>
        <div class="product-cta">Ver detalhes</div>
    </div>

    <!-- BACCARAT ROUGE 540 -->
    <div class="product-card">
        <img src="WhatsApp Image 2026-06-07 at 21.16.00 (1).jpeg" alt="Baccarat Rouge 540">
        <div class="product-name">Baccarat Rouge 540</div>
        <p class="product-desc">O perfume mais desejado do mundo. Doce, marcante e luxuoso.</p>
        <div class="product-cta">Ver detalhes</div>
    </div>

</section>

</body>
</html>
<!-- update -->


