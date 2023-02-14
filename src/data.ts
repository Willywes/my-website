import {Certification, Education, Job} from './types';

export const sections = [
    {id: 'about', title: 'Sobre mí'},
    {id: 'resume', title: 'Resumen'},
    {id: 'portfolio', title: 'Portafolio'},
    {id: 'blog', title: 'Blog'},
    {id: 'contact', title: 'Hablemos'}
];
export const jobs: Job[] = [
    {
        title: 'Principal CEO',
        company: {
            name: 'devlabs',
            url: 'https://devlabs.cl'
        },
        location: 'Chile, remoto',
        period: {
            from: new Date(2022, 9 - 1, 1),
            to: null
        },
        aptitudes: [
            'Innovación tecnológica',
            'Startup de tecnología',
            'Liderazgo de equipos',
            'Arquitectura de software',
            'Desarrollo de software'
        ],
        description:
            'Mi principal labor como CEO de devlabs es buscar constantemente nuevas formas de innovar y mejorar nuestros productos y servicios a través del uso de tecnología de vanguardia. También me encargo de liderar y motivar a nuestro equipo de desarrolladores para que alcancen sus metas y objetivos profesionales. Me siento altamente comprometido con el éxito de devlabs y estoy siempre buscando nuevas oportunidades para hacer crecer la empresa y mejorar la experiencia de nuestros clientes.'
    },
    {
        title: 'Freelance Full Stack Developer',
        company: {
            name: 'Independiente',
            url: 'https://alejandroisla.cl'
        },
        location: 'Chile, remoto',
        period: {
            from: new Date(2011, 1 - 1, 1),
            to: null
        },
        aptitudes: [
            'Desarrollo de software',
            'Desarrollo web',
            'Desarrollo móvil',
            'Desarrollo de aplicaciones de escritorio'
        ],
        description:
            'Desde el año 2011 he trabajado como desarrollador de software freelance. Durante este tiempo he desarrollado una gran variedad de proyectos para clientes de todo el mundo. He trabajado en proyectos de desarrollo web, desarrollo móvil y desarrollo de aplicaciones de escritorio. He trabajado con tecnologías como PHP, JavaScript, Java, C#,  Python,  Kotlin, entre otras. He trabajado con frameworks como Laravel, Symfony, CodeIgniter, React, Angular, Vue, Flutter, entre otros. He trabajado con bases de datos como MySQL, PostgreSQL, MongoDB, SQLite, entre otras. He trabajado con sistemas operativos como Linux, Windows, Mac OS, Android, iOS, entre otros.'
    },
    {
        title: 'Arquitecto de software',
        company: {
            name: 'Innovaweb',
            url: 'https://innovaweb.cl'
        },
        location: 'Chile, remoto',
        period: {
            from: new Date(2021, 7 - 1, 1),
            to: new Date(2022, 9 - 1, 1)
        },
        aptitudes: [
            'Next.js',
            'Driver Domain Design (DDD)',
            'Arquitectura de software',
            'React.js',
            'Laravel',
            'AWS'
        ],
        description:
            'Como Arquitecto de software en Innovaweb, fui responsable de diseñar e implementar soluciones de arquitectura de software utilizando herramientas como Next.js, React.js, Laravel y AWS. También tengo experiencia en el enfoque de Diseño de Dominio del Controlador (DDD) y mi labor era mantenerme actualizado en las últimas tendencias y tecnologías en el área.'
    },
    {
        title: 'Director de Proyectos',
        company: {
            name: 'Innovaweb',
            url: 'https://innovaweb.cl'
        },
        location: 'Chile, remoto',
        period: {
            from: new Date(2019, 1 - 1, 1),
            to: new Date(2022, 9 - 1, 1)
        },
        aptitudes: [
            'Dirección de equipos de trabajo',
            'Gestión ágil de proyectos',
            'Scrum Master',
            'Desarrollo de liderazgo',
            'Metodologías ágiles'
        ],
        description:
            'Como Director de proyectos en Innovaweb, he sido responsable de dirigir y desarrollar equipos de trabajo y liderar la implementación de metodologías ágiles. Además, he tenido experiencia en la gestión ágil de proyectos y he sido Scrum Master en distintos proyectos. Mi objetivo principal es ayudar a mis equipos a alcanzar sus metas y objetivos a través de la promoción del liderazgo y la colaboración.'
    },
    {
        title: 'Desarrollador Web',
        company: {
            name: 'Innovaweb',
            url: 'https://innovaweb.cl'
        },
        location: 'Chile, Viña del Mar',
        period: {
            from: new Date(2018, 2 - 1, 1),
            to: new Date(2022, 9 - 1, 1)
        },
        aptitudes: [
            'Laravel',
            'PHP',
            'React.js',
            'MySQL',
            'HTML',
            'CSS',
            'Git',
            'Scrum',
            'Metodologías ágiles'
        ],
        description:
            'Como Desarrollador Web en Innovaweb, una empresa de tecnología con sede en Chile, he tenido la oportunidad de trabajar en una amplia variedad de proyectos utilizando distintas tecnologías como Laravel, PHP, React.js, MySQL, HTML, CSS y Git. También he participe en proyectos que utilizan metodologías ágiles como Scrum.'
    },
    {
        title: 'Desarrollador Web y Móvil',
        company: {
            name: 'Want',
            url: 'https://want.cl'
        },
        location: 'Chile, Viña del Mar',
        period: {
            from: new Date(2017, 10 - 1, 1),
            to: new Date(2019, 2 - 1, 1)
        },
        aptitudes: ['Laravel', 'Wordpress', 'React.js', 'React Native', 'Angular'],
        description:
            'Como Desarrollador Web y Móvil en Want Agencia de Diseño, una empresa de diseño y tecnología con sede en Viña del Mar, Chile, tuve tenido la oportunidad de aplicar mis conocimientos y habilidades en proyectos tanto para la web como para dispositivos móviles utilizando diversas tecnologías como Laravel, Wordpress, React.js, React Native y Angular.'
    }
];

export const educations: Education[] = [
    {
        title: 'Ingeniería en Informática',
        institution: {
            name: 'Duoc UC',
            url: 'https://duoc.cl'
        },
        location: 'Chile, Viña del Mar',
        period: {
            from: new Date(2019, 12 - 1, 1),
            to: new Date(2015, 3 - 1, 1)
        }
    },
    {
        title: 'Analista Programador Computacional',
        institution: {
            name: 'Duoc UC',
            url: 'https://duoc.cl'
        },
        location: 'Chile, Viña del Mar',
        period: {
            from: new Date(2017, 12 - 1, 1),
            to: new Date(2015, 3 - 1, 1)
        }
    }
];

export const certifications: Certification[] = [
    {
        title: 'Scrum Master Certified Expert',
        institution: {
            name: 'Certjoin',
            url: 'https://certjoin.com/campus/mod/customcert/verify_certificate.php',
            code: 'nkFh5hyPX5'
        },
        date: new Date(2021, 11 - 1, 1)
    },
    {
        title: 'Scrum Product Owner Certified Expert',
        institution: {
            name: 'Certjoin',
            url: 'https://certjoin.com/campus/mod/customcert/verify_certificate.php',
            code: 'MQ4F0FrkMe'
        },
        date: new Date(2021, 11 - 1, 1)
    },
    {
        title: 'Desarrollo de App Móviles',
        institution: {
            name: 'Google Actívate',
            url: 'https://learndigital.withgoogle.com/activate/validate-certificate-code',
            code: 'ETK UEM LUB'
        },
        date: new Date(2021, 4 - 1, 1)
    },
    {
        title: 'Programación en Python I',
        institution: {
            name: 'Coursera',
            url: 'https://www.coursera.org/account/accomplishments/verify/TLLTAKHH6Q5F',
            code: 'TLLTAKHH6Q5F'
        },
        date: new Date(2020, 11 - 1, 1)
    }
];
