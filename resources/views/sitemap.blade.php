<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <!-- Halaman Utama -->
    <url>
        <loc>{{ url('/') }}</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
    </url>
    <!-- Tentang & Sejarah -->
    <url>
        <loc>{{ url('/tentang') }}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <!-- Potensi & Budaya -->
    <url>
        <loc>{{ url('/potensi') }}</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>
    <!-- Kabar Desa -->
    <url>
        <loc>{{ url('/kabar') }}</loc>
        <changefreq>daily</changefreq>
        <priority>0.9</priority>
    </url>
    <!-- Galeri & Peta -->
    <url>
        <loc>{{ url('/galeri') }}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.7</priority>
    </url>

    <!-- Halaman Berita Dinamis dari Database -->
    @foreach ($news as $item)
        <url>
            <loc>{{ url('/kabar/' . $item->id) }}</loc>
            <lastmod>{{ $item->updated_at->toAtomString() }}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.6</priority>
        </url>
    @endforeach
</urlset>
