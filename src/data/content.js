export const profile = {
  name: 'Цветков Павел',
  role: 'Специалист по информационной безопасности',
  location: 'Тверь · удалённо',
  tagline:
    'Пентест веб-приложений и инфраструктуры. От анализа защищённости RED OS до собственной платформы автоматизации пентеста.',
  about:
    'Начинающий специалист по информационной безопасности с фокусом на пентест веб-приложений и инфраструктуры. За 9 месяцев практики и стажировок прошёл путь от анализа защищённости RED OS до разработки платформы автоматизации пентеста (дипломный проект). Активно участвую в Bug Bounty (Standoff 365, BI.ZONE) и CTF, веду на GitHub разборы прохождения учебных машин с описанием эксплуатации реальных классов уязвимостей.',
  stats: [
    { value: '9', label: 'месяцев практики' },
    { value: '5', label: 'находок Bug Bounty' },
    { value: '9', label: 'разобранных машин' },
  ],
}

export const contacts = {
  email: 'hubmaileryb@mail.ru',
  telegram: '@Pashantik52',
  github: 'https://github.com/mapanit',
  hh: 'https://tver.hh.ru/resume/80ef2af6ff0cc455f40039ed1f3572594f394c',
}

export const publicProfiles = [
  {
    label: 'HackerLab',
    url: 'https://hackerlab.pro/users/Pavel253',
  },
  {
    label: 'Hack The Box',
    url: 'https://profile.hackthebox.com/profile/01a0e998-0837-737c-af0c-4b85bf18ecca',
  },
]

export const skills = {
  'Pentest / AppSec': [
    'OWASP Top 10',
    'Burp Suite',
    'sqlmap',
    'ffuf',
    'Dirsearch',
    'Metasploit',
    'Nuclei',
    'Linpeas',
  ],
  'Инфраструктура / OS': ['Unix', 'Kali', "RedOs", 'TCP/IP', 'auditctl', 'FBTrace'],
  Разработка: ['Python', 'FastAPI', 'JavaScript', 'React', 'Docker', 'SQLite', 'Go'],
}

export const experience = [
  {
    period: 'Сентябрь 2026 — наст. время',
    org: 'Bug Bounty',
    title: 'Исследователь безопасности',
    place: 'Standoff 365, BI.ZONE',
    bullets: [
      'Тестирование на проникновение веб-приложений и API',
      'Уязвимости классов OWASP Top 10: SQLi, XSS, CSRF, IDOR',
      'PoC-эксплойты и отчёты с рекомендациями по устранению',
    ],
  },
  {
    period: 'Март — Апрель 2026',
    org: 'Корпорация Ред Софт, ООО',
    title: 'Инженер по безопасности БД (практика)',
    place: 'Тверь',
    bullets: [
      'Защита СУБД от копирования данных в импортозамещённой среде (РЕД ОС + Ред БД)',
      'Шифрование страниц данных и индексов через КриптоПро',
      'Резервное копирование с шифрованием (gbak + GPG), аудит доступа (auditctl, FBTrace)',
    ],
  },
  {
    period: 'Ноябрь — Декабрь 2025',
    org: 'Bug Bounty',
    title: 'Исследователь безопасности',
    place: 'Самостоятельный поиск',
    bullets: [
      '5 уязвимостей, подтверждённых триажем платформы',
      'Фокус на IDOR / Broken Access Control, XSS, SSRF',
      'Отчёты по стандарту: шаги воспроизведения, PoC, impact',
    ],
  },
  {
    period: 'Сентябрь — Октябрь 2025',
    org: 'Корпорация Ред Софт, ООО',
    title: 'Информационная безопасность (практика)',
    place: 'Москва',
    bullets: [
      'Анализ защищённости RED OS Linux на известные уязвимости',
      'Metasploit, Nessus, Burp Suite, enum4linux, Sqlmap, Linpeas',
    ],
  },
  {
    period: 'Май — Июнь 2024',
    org: 'Корпорация Ред Софт, ООО',
    title: 'Тестирование на проникновение (практика)',
    place: 'Москва',
    bullets: [
      'Анализ защищённости RED OS Linux',
      'Metasploit, Nessus, nmap, enum4linux — разведка и атака сетевых служб',
    ],
  },
]

export const education = {
  school: 'Тверской промышленно-экономический колледж',
  program: 'Комплексное обеспечение информационной безопасности автоматизированных систем',
  year: '2026',
  diploma:
    'Дипломный проект — платформа для автоматизации пентеста: объединяет Nmap, Nuclei, Retire.js и SSL/TLS-сканер в едином интерфейсе. Python/FastAPI + React, деплой через Docker Compose.',
}


export const portfolio = [
  {
    id: 'shadowscope',
    severity: 'project',
    tag: 'PROJECT',
    title: 'ShadowScope',
    summary:
      'Модульный CLI-инструмент на Python для авторизованной разведки и анализа поверхности атаки. Сохраняет результаты в SQLite и формирует отчёты.',
    stack: ['Python', 'CLI', 'Recon', 'SQLite'],
    terminalLines: [
      '$ python main.py --check-tools',
      '[+] external tools checked',
      '[+] scope validation enabled',
      '[+] results saved to SQLite',
      '> reports: Markdown / HTML / JSON',
    ],
    link: 'https://github.com/mapanit/ShadowScope',
  },
  {
    id: 'cyberscope',
    severity: 'project',
    tag: 'ДИПЛОМНЫЙ ПРОЕКT',
    title: 'CyberScope',
    summary:
      'Платформа для автоматизации пентеста. Объединяет Nmap, Nuclei, Retire.js и SSL/TLS-сканер в едином интерфейсе.',
    stack: ['Python', 'FastAPI', 'React', 'Docker'],
    terminalLines: [
      '$ docker compose up',
      '✓ backend  — FastAPI :8000',
      '✓ frontend — React   :5173',
      '✓ scanners — nmap, nuclei, sslscan',
      '> сканирование запущено, отчёт → JSON/DOCX',
    ],
    link: 'https://github.com/mapanit',
  },
  {
    id: 'thales',
    severity: 'easy',
    tag: 'EASY',
    title: 'Thales',
    summary:
      'RCE через Tomcat Manager + эскалация до root. Подбор учётных данных (Metasploit) → reverse shell через WAR-файл → SUID-эскалация через backup-скрипт.',
    stack: ['Metasploit', 'Tomcat', 'Privilege Escalation'],
    terminalLines: [
      '$ msfconsole -q -x "use exploit/multi/http/tomcat_mgr_upload"',
      '[+] Reverse shell established',
      '$ cat notes.txt',
      '  backup.sh runs as root, writable by user',
      '$ chmod u+s /bin/bash && ./backup.sh',
      '# whoami → root',
    ],
    writeupFile: 'Thales.md',
    link: 'https://github.com/mapanit',
  },
  {
    id: 'dc7',
    severity: 'easy',
    tag: 'EASY',
    title: 'DC-7',
    summary:
      'RCE через Drupal + privilege escalation через cron. OSINT по нику из футера сайта → учётные данные на GitHub → RCE через модуль PHP filter.',
    stack: ['OSINT', 'Drupal', 'drush', 'cron'],
    terminalLines: [
      '$ whatweb target.local',
      '  CMS: Drupal 7',
      '$ drush php-eval "system(\'id\');"',
      '  uid=33(www-data)',
      '$ crontab -l',
      '  */1 * * * * root /opt/scripts/backups.sh',
    ],
    writeupFile: 'DC-7.md',
    link: 'https://github.com/mapanit',
  },
  {
    id: 'web-n7',
    severity: 'medium',
    tag: 'MEDIUM',
    title: 'Web Machine N7',
    summary:
      'Обход Broken Access Control (OWASP A01). Обход проверки на клиенте и подмена MD5-хэша роли в cookie через Burp Suite.',
    stack: ['Burp Suite', 'Broken Access Control'],
    terminalLines: [
      '$ Cookie: role=098f6bcd4621d373cade4e832627b4f6',
      '$ echo -n "admin" | md5sum',
      '  21232f297a57a5a743894a0e4a801fc3',
      '$ Cookie: role=21232f297a57a5a743894a0e4a801fc3',
      '> доступ к /admin получен',
    ],
    writeupFile: 'Web_Machine_N7.md',
    link: 'https://github.com/mapanit',
  },
  {
    id: 'dc2',
    severity: 'easy',
    tag: 'EASY',
    title: 'DC-2',
    summary:
      'Эксплуатация WordPress + повышение привилегий. Обход rbash через GTFOBins, брутфорс через WPScan со словарём на базе Cewl.',
    stack: ['WPScan', 'Cewl', 'GTFOBins'],
    terminalLines: [
      '$ cewl http://dc-2 -w wordlist.txt',
      '$ wpscan --url dc-2 -P wordlist.txt',
      '[+] tom / parousia',
      '$ vi -c \':!bash\'',
      '$ sudo git help config',
      '  !/bin/bash',
    ],
    writeupFile: 'DC-2.md',
    link: 'https://github.com/mapanit',
  },
  {
    id: 'sunset',
    severity: 'easy',
    tag: 'EASY',
    title: 'Sunset',
    summary:
      'Восстановление пароля + повышение привилегий через sudo. Эксплуатация анонимного FTP-доступа, John the Ripper.',
    stack: ['FTP', 'John the Ripper', 'sudo'],
    terminalLines: [
      '$ ftp anonymous@sunset',
      '  230 Login successful',
      '$ john --wordlist=rockyou.txt hash.txt',
      '  webmin:cheer14',
      '$ sudo ed',
      '  !/bin/sh',
    ],
    writeupFile: 'Sunset1.md',
    link: 'https://github.com/mapanit',
  },
  {
    id: 'danglingtree',
    severity: 'medium',
    tag: 'MEDIUM',
    title: 'DanglingTree',
    summary:
      'Компрометация домена Windows через WAC RCE, SmarterMail, DPAPI и AD CS ESC1.',
    stack: ['Windows', 'DPAPI', 'AD CS', 'ESC1'],
    terminalLines: [
      '$ smbclient //target/IT',
      '[+] credentials recovered from PDF',
      '$ exploit WAC + SmarterMail',
      '[+] domain administrator access',
    ],
    writeupFile: 'danglingtree.md',
    link: 'https://github.com/mapanit',
  },
  {
    id: 'orion',
    severity: 'easy',
    tag: 'EASY',
    title: 'Orion',
    summary:
      'RCE в Craft CMS (CVE-2025-32432) и повышение привилегий через обход аутентификации Telnetd (CVE-2026-24061).',
    stack: ['Craft CMS', 'CVE-2025-32432', 'Telnetd', 'CVE-2026-24061'],
    terminalLines: [
      '$ exploit Craft CMS',
      '[+] Pre-auth RCE',
      '$ recover credentials from .env',
      '$ exploit Telnetd auth bypass',
      '# whoami → root',
    ],
    writeupFile: 'Orion.md',
    link: 'https://github.com/mapanit',
  },
  {
    id: 'fireflow',
    severity: 'medium',
    tag: 'MEDIUM',
    title: 'FireFlow',
    summary:
      'Разбор цепочки компрометации Kubernetes-кластера: уязвимость Langflow, ошибки проверки JWT и эскалация через права Kubernetes RBAC.',
    stack: ['Langflow', 'JWT', 'Kubernetes', 'RBAC'],
    terminalLines: [
      '$ analyze exposed services',
      '[+] Langflow entry point identified',
      '[+] Kubernetes permissions reviewed',
      '[+] privilege escalation path documented',
      '> HTB FireFlow write-up',
    ],
    writeupFile: 'Fireflow.md',
    link: 'https://github.com/mapanit',
  },
  {
    id: 'makesense',
    severity: 'medium',
    tag: 'MEDIUM',
    title: 'MakeSense',
    summary:
      'Разбор цепочки уязвимостей WordPress: Stored XSS, получение удалённого выполнения кода и повышение привилегий на Linux.',
    stack: ['WordPress', 'Stored XSS', 'RCE', 'Linux'],
    terminalLines: [
      '$ inspect WordPress theme',
      '[+] stored XSS in admin workflow',
      '[+] plugin upload leads to RCE',
      '[+] OCR service privilege escalation',
      '> HTB MakeSense write-up',
    ],
    writeupFile: 'MakeSense.md',
    link: 'https://github.com/mapanit',
  },
]
