server {
    listen 80;
    listen [::]:80;
    server_name teloai.app www.teloai.app;

    root /var/www/teloai.app;
    index index.html;

    access_log /var/log/nginx/teloai.access.log;
    error_log /var/log/nginx/teloai.error.log;

    location ^~ /_next/static {
        expires 30d;
        add_header Cache-Control "public, max-age=2592000, immutable";
        try_files $uri =404;
    }

    location ~* \.(?:png|jpg|jpeg|gif|webp|ico|svg|css|js|woff2?|txt|json)$ {
        expires 30d;
        add_header Cache-Control "public, max-age=2592000";
        try_files $uri =404;
    }

    location / {
        try_files $uri $uri.html $uri/ /index.html;
    }
}
