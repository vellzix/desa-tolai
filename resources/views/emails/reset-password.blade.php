<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pemulihan Kata Sandi</title>
    <style>
        body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            background-color: #f6f9fc;
            color: #333333;
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: none;
            -ms-text-size-adjust: none;
        }
        .wrapper {
            width: 100%;
            background-color: #f6f9fc;
            padding: 40px 0;
        }
        .container {
            max-width: 570px;
            margin: 0 auto;
            background-color: #ffffff;
            border: 1px solid #e8e8e8;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
        }
        .header {
            background-color: #0a0f25;
            padding: 30px;
            text-align: center;
            border-bottom: 3px solid #d4af37;
        }
        .header-title {
            color: #ffffff;
            font-size: 20px;
            font-weight: bold;
            margin: 0;
            letter-spacing: 0.05em;
        }
        .header-subtitle {
            color: #d4af37;
            font-size: 11px;
            text-transform: uppercase;
            margin: 5px 0 0 0;
            letter-spacing: 0.15em;
            font-weight: 600;
        }
        .content {
            padding: 40px 30px;
            line-height: 1.6;
        }
        .greeting {
            font-size: 16px;
            font-weight: bold;
            margin-top: 0;
            margin-bottom: 15px;
            color: #0a0f25;
        }
        .text {
            font-size: 14px;
            color: #555555;
            margin-bottom: 25px;
        }
        .button-wrapper {
            text-align: center;
            margin: 30px 0;
        }
        .btn-primary {
            display: inline-block;
            background-color: #0a0f25;
            color: #ffffff !important;
            text-decoration: none;
            padding: 12px 30px;
            font-size: 14px;
            font-weight: bold;
            border-radius: 4px;
            border: 1px solid #d4af37;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        .btn-primary:hover {
            background-color: #121a3e;
        }
        .divider {
            border-top: 1px solid #eeeeee;
            margin: 30px 0;
        }
        .raw-link-title {
            font-size: 12px;
            color: #888888;
            margin-bottom: 8px;
        }
        .raw-link {
            font-size: 12px;
            color: #0a0f25;
            word-break: break-all;
            line-height: 1.4;
        }
        .footer {
            background-color: #fafbfc;
            padding: 25px 30px;
            text-align: center;
            border-top: 1px solid #eeeeee;
            font-size: 11px;
            color: #888888;
        }
        .footer p {
            margin: 5px 0;
        }
        .alert-text {
            font-size: 12px;
            color: #777777;
            font-style: italic;
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <div class="container">
            <!-- Header Brand -->
            <div class="header">
                <div class="header-title">Pemerintah Desa Tolai</div>
                <div class="header-subtitle">Kabupaten Parigi Moutong</div>
            </div>

            <!-- Content Area -->
            <div class="content">
                <p class="greeting">Halo,</p>
                <p class="text">
                    Anda menerima email ini karena kami menerima permintaan untuk mengatur ulang (reset) kata sandi akun Administrasi Portal Desa Tolai Anda.
                </p>

                <div class="button-wrapper">
                    <a href="{{ $url }}" class="btn-primary" target="_blank">
                        Setel Ulang Kata Sandi
                    </a>
                </div>

                <p class="text alert-text">
                    Tautan pemulihan kata sandi ini akan kedaluwarsa dalam 60 menit. Jika Anda tidak meminta pengaturan ulang kata sandi ini, tidak perlu ada tindakan lebih lanjut yang perlu Anda lakukan.
                </p>

                <div class="divider"></div>

                <p class="raw-link-title">Jika tombol di atas tidak berfungsi, salin dan tempel tautan berikut ke browser internet Anda:</p>
                <p class="raw-link">
                    <a href="{{ $url }}" style="color: #0a0f25; text-decoration: underline;">{{ $url }}</a>
                </p>
            </div>

            <!-- Footer Info -->
            <div class="footer">
                <p>&copy; {{ date('Y') }} Pemerintah Desa Tolai. Hak Cipta Dilindungi.</p>
                <p>Kecamatan Torue, Kabupaten Parigi Moutong, Sulawesi Tengah, Indonesia.</p>
                <p style="margin-top: 10px; font-size: 10px; color: #aaaaaa;">Email ini dikirimkan secara otomatis dari sistem informasi administrasi desa.</p>
            </div>
        </div>
    </div>
</body>
</html>
