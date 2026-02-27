export const cities = [
  { name: 'London', count: '124 Experiences', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWALvKbxHotF2UTB7G_n8QMvq0zkfzjA2XyuRobHejewNGGSY-8m6Zrqv8eYYRXOWlTUQ-xo6lnafo7XexaVPFOmz3-u5JlgI4-HFBln6g1mqIdw_B8ZP-sOq6gp2mHiWHWXltHbvN6UUgVryjMRDKGLDIjCaM1ip5I_meSX1f2bxCJHsSFUlMHXuuh9ISBXbC4InS30TFb4k-aU7KxaEsCYhLVLsDi60iCBc4Me-0fTA_oMfmTG3tjyC8_u6hrYjsc07F8cWKS2s' },
  { name: 'New York', count: '98 Experiences', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCN9qmgCIgwDXz40U7nROknc5CRrzmzIZJWXUSDJ9Y4Hx4Fi0wH7kkmMFVIaZfnoiUi4HKF231MvkkPhAgZNUfvPESaJY6l_F8v6qto_7UaRV9MKKg1XMX4EcAd2BFCbcS4ypbEla0NjAJa_sy8e1uYJZ9WJgJCro0ydsbCDOX1Fo8y6l8oK32Me2HKPeB8Tb0o_AGQQTJGkAzuxLNfpQOE1NMlj2fXbEvHVlwW9fxFwuVUpa8NdHU9PeW8h8gCioonSVxiJ_y35Q8' },
  { name: 'Paris', count: '85 Experiences', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHA16T4tzJTaHcE368m7AVoNF844X7QTqTo9pj3jSPHjdRupXSpKYlfMNx92zr0fV-9WGsOsTSSJnjhfq6-KZ4G4FmA_VOdia4elf1l3JNYi2137CxwkA76BQoChOzyGrC0MOtF6rMb1A3jif1tNEdHEQjodnKuaYbkZGkVO1y85tPlsdhYUcCCqtAAwbjjhodiNjkqF0KFZf4x6IlK_FYAoJNQIAf7TSgXBD6SmDh_D6ef5fEEQmouB7hNmBNp6pyJ6J14QfQmyM' },
  { name: 'Tokyo', count: '76 Experiences', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe56G13ludr5fG12Ra-FgDrCf0UKSHr_MGu8Xtl9FZcpDHMoHCn7aDIAwxxBkNjDY7ABdrt4jrrYrDycyQchC6hpHSp_lf6nWWpl5zqEAHGDsndUtDZ-7v_7fqLxKpb7eSAs5emWZfhGALzrYNQWyZrz25ESZM3khYuBy3GFN0u_EwmC8ZzWmKD4n6eevydQHG8RFwi9ugCWpwesRUsxq-QNfIj8aSTW8JnQ2cugbSm8P_pceTsPYL3W08skWObcRhI6Y7Hvw5IOc' },
  { name: 'Barcelona', count: '62 Experiences', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAbd0b0ayHowIbHgy_n4WM5oUFCr3_wB72hoOpoZMEzU92cpvqCHynlSpqYbM074ykYOFUw2lUx5_qDogyuqiipMRIwQP3l_3uvak9FQxPsTE7aFuU68nPLj109k-EIU1sxMJi7qurSjqcVyDFCXuhnyo5_boHKYHu2AVyrN0AJ2SrY8UoEbfzUN6xfvacLXxd-ShUH1thoeWSu6kBNc_-EYQJmhkLmzAftlmWGbv-W_-rQRpg6VHYY8c8fZO2aGqhm0NlYrei8SE' },
  { name: 'Rome', count: '112 Experiences', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqvBkA-nYBApGfQn_Knxxe0LJYQL3dDW74GLayOT0lnKveeTSjGWuX8ufRJ0Gwd9EBbqM06yKtVUFQiHhiKb4U0sgR47VDvVwVIOmKaT2zJCLwdwUuUOPjnBbW9iRoUPDCZQoOPfwp92m3jvBRwBfbwGVroXs4nQulcLGDdmbSY658iayCcqMFsQ-Ocq8Wx87DKqx18WyivACLvZ0YR2Lk5FR6MIgTXv-28_CB_5J1myA8FRCGAu6VLBIay9W80mPsdD9zc46EaoU' },
];

export const filterPills = ['Top Picks', 'London', 'New York', 'Paris', 'Tokyo', 'Barcelona', 'Rome', 'Amsterdam'];

export const bestsellingItems = [
  {
    id: 'gift-card',
    type: 'gift-card' as const,
    title: 'GiftsForFoodies Gift Card',
    location: 'Countrywide',
    price: 'From $18',
    image: '',
  },
  {
    id: 'omakase',
    type: 'experience' as const,
    title: 'Omakase Sushi Masterclass',
    location: 'New York, NY',
    price: 'From $120.00',
    rating: 4,
    reviews: 312,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDn5LDIFORsSKVbajni4k0aacAbqsacYj4d0wA13dFNemZq57iqDwoEeITEZRMpCDCuDy8d-yRSj2d9UF9EvZ22lFeMXQp4unUb84AO793CnlhmPNOhSMlt6Z6Na9WW93H7eeyTouxljgJgchAByK_81tEAZazuushrAuq8RExm-kH_MQQWjJ56tFRMqIlHNse1-1HVTIJc3Rm3_mKcq0g9f__Kh7aTl6SqZXapX8QXl8uaDILkicwWwqnlDlIfX4CtPsOBXuhKwoY',
  },
  {
    id: 'napa',
    type: 'experience' as const,
    title: 'Napa Valley Wine Tasting Tour',
    location: 'Napa Valley, CA',
    price: 'From $195.00',
    rating: 5,
    reviews: 1200,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO5tgviRKYt3Nu_BS3S6jyl4dfI5pFCEPdyKK_8crtMLWaz0yz7v2YHz7qWZH3RIUMc5iJJOjVqkRsZtN3y_r-vhMjvSWvOJM73NC8lAi0KBwDVtYXUy4cJJhH3oqPfm6NbUYenqYWxL5g3FdFu1yS9Mw12k7zUutm_gUJGxzFZDGJyXGmPNGwpr-bbl3zyOBK6PEyNolSGI3gQXuufphxijte4B7xjlmni1czWVstCQe-mRFdZgCmALWEi9jGTfV-wppAdEmnGt8',
  },
  {
    id: 'michelin',
    type: 'experience' as const,
    title: 'Private Michelin Chef Dinner',
    location: 'Paris, FR',
    price: 'From €250.00',
    rating: 5,
    reviews: 89,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOsb_7FiPSVzRtM0RQoVx9NJbbqlKgJOt058l4GWcjWZYwS3NCAub9o4T6RR4lbF2Wl7PpBgm3AkZPtFkGleNdDPuW6lL8V8ITN-zuEaOhugeGnhtdzpuyFkPXnBovjJrhbZ2SmJcelElJSmsGbZHyFZkteG7VGK5Gk8G-eqskgdxSzpJFCNAALWMynzfFwo6v7VSCfAoOkxBprMjY72kw_7wazxkkWEfZpn-fua_wbGlw6iC2qDfs_OoC18AYObkyIrDOlybXveo',
  },
];

export const flashSales = [
  { title: 'Authentic Neapolitan Pizza Class', price: '£29', originalPrice: '£49', discount: 'SAVE 40%', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqvBkA-nYBApGfQn_Knxxe0LJYQL3dDW74GLayOT0lnKveeTSjGWuX8ufRJ0Gwd9EBbqM06yKtVUFQiHhiKb4U0sgR47VDvVwVIOmKaT2zJCLwdwUuUOPjnBbW9iRoUPDCZQoOPfwp92m3jvBRwBfbwGVroXs4nQulcLGDdmbSY658iayCcqMFsQ-Ocq8Wx87DKqx18WyivACLvZ0YR2Lk5FR6MIgTXv-28_CB_5J1myA8FRCGAu6VLBIay9W80mPsdD9zc46EaoU' },
  { title: 'Sommelier Wine Tasting', price: '£55', originalPrice: '£75', discount: 'SAVE 25%', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCFXD7SiKgmKGXODgr0uv-4aajpDQ8doNv3u2saXDUcQGO6PamaLopcCZc9D38AsVTwZFbUzEGDC_lhVs6bdX01WI3bkSIu23gzaMqG6LUUXSx9Nq7OPhQ20R0mmSfrJFkKgL-RhrogrTSQUiDGOpuY7guO5osh6tua8x5ZN4lTQ4yPEd39HTKgIddoiNS2xXy2dMgaMUkKopMsJvCiczknOHaoUjLyRCfv5031mC38Ppxka7bIjEf5EfWXbvj2sjHwnbncmOZQxvg' },
  { title: 'Advanced Mixology Workshop', price: '£42', originalPrice: '£60', discount: 'SAVE 30%', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDe0VRPIulOTZAKtKeLCH8CDAOqxNoju58YtgBuvVH-YmvFilaE1ZmM4pzW7NT7YCIgAO8-VTHFCvmG1jG5RTVhrBQ45On6bPp-KXBp7_9c22WenYsZbcjPBo6QCQOMHSxQM2oR0VTm5JyJLUFcNCXx1eru7A1ez8c20EQaAFbxoTKqK2M5bEmB7oDfyMKiT9drM5ogUaphG3qg-XxnxZbLgxHwuAMKgliLX1aQOhN5Dn5-zBQPVTRIgJ8460DLtCwMmx9wOtey4z0' },
  { title: 'Pastry & Dessert Masterclass', price: '£25', originalPrice: '£50', discount: 'SAVE 50%', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_QOPxSh6AZYS7kbXYzfBWcQDR9wIUkV1iIE19aeepEeDlmcuzzpdRrlMvjIPA6JYgta9J_id1IfNxzX4jssHsFA8BNwKhREuB90h3cwxdEcODI6H2MWNkH23a7k4vruWD8zq124HQ8p7IHAmnyj7Von9jLUxchx5sJ9qdNLVeCPuTrawjejvc7w-EAeLJJml8JFE0A4fKKZ_O1u7XPa7fSYRfLvxs4myzECPQZZ531Wgt8C4nuC33hobXfcPtQZUDiGgviDmn_r4' },
];

export const shopByRecipient = [
  { label: 'For Him', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOsb_7FiPSVzRtM0RQoVx9NJbbqlKgJOt058l4GWcjWZYwS3NCAub9o4T6RR4lbF2Wl7PpBgm3AkZPtFkGleNdDPuW6lL8V8ITN-zuEaOhugeGnhtdzpuyFkPXnBovjJrhbZ2SmJcelElJSmsGbZHyFZkteG7VGK5Gk8G-eqskgdxSzpJFCNAALWMynzfFwo6v7VSCfAoOkxBprMjY72kw_7wazxkkWEfZpn-fua_wbGlw6iC2qDfs_OoC18AYObkyIrDOlybXveo' },
  { label: 'For Her', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAKMcicMJOdZjuuM6FFAUNoPqBUHdnoW71jG791DaYENSe_cTZoQIloWLpY3ZwMN3xOZo6qerUuEcT8Ftug82vTJ1vuqMrnm2qb6ChgdlrP0GYstp3NfAMe5hvXXyhsFfQB8aicfbcIleIj_9dAkKawFd3QoldkuwuyFa4Bp79SxrtxvHL4DtEi4uTqmKFrv-G4irqYK_fe1IqDj8c2jgnqu-EcGs8RD92160ckqYAZWJRZSlGreu64INyksjgq2oPZVBnU7YklYts' },
  { label: 'For Couples', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO5tgviRKYt3Nu_BS3S6jyl4dfI5pFCEPdyKK_8crtMLWaz0yz7v2YHz7qWZH3RIUMc5iJJOjVqkRsZtN3y_r-vhMjvSWvOJM73NC8lAi0KBwDVtYXUy4cJJhH3oqPfm6NbUYenqYWxL5g3FdFu1yS9Mw12k7zUutm_gUJGxzFZDGJyXGmPNGwpr-bbl3zyOBK6PEyNolSGI3gQXuufphxijte4B7xjlmni1czWVstCQe-mRFdZgCmALWEi9jGTfV-wppAdEmnGt8' },
  { label: 'For Families', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhzS43D12srM6LPo7dneJPJ4fHi0kv38-Jmus9Nxszd7UfhqXSXz0aFEkIENMCnCjBJH4J_yQxDoYJ5_tH5_8Kbj3rm4ysEtGBWi_bYTmhVhIguDqfB76HyUqwGeAyZibc4b1Zc042Ii_LXAF8bkZgUdakoYo6VbIXJQwZyvxP4MzYOEQTzWCyyrznOm92UHv_ajjyuMEu9Oinm1q4pKwhewoiSKF5Y1liWQtCoiTUq0TD4UJQeHHKpd_Ukp5nA4LLvhIU9lQIbq4' },
  { label: 'For Foodies', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDn5LDIFORsSKVbajni4k0aacAbqsacYj4d0wA13dFNemZq57iqDwoEeITEZRMpCDCuDy8d-yRSj2d9UF9EvZ22lFeMXQp4unUb84AO793CnlhmPNOhSMlt6Z6Na9WW93H7eeyTouxljgJgchAByK_81tEAZazuushrAuq8RExm-kH_MQQWjJ56tFRMqIlHNse1-1HVTIJc3Rm3_mKcq0g9f__Kh7aTl6SqZXapX8QXl8uaDILkicwWwqnlDlIfX4CtPsOBXuhKwoY' },
];

export const shopByCategory = [
  { label: 'Fine Dining', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOsb_7FiPSVzRtM0RQoVx9NJbbqlKgJOt058l4GWcjWZYwS3NCAub9o4T6RR4lbF2Wl7PpBgm3AkZPtFkGleNdDPuW6lL8V8ITN-zuEaOhugeGnhtdzpuyFkPXnBovjJrhbZ2SmJcelElJSmsGbZHyFZkteG7VGK5Gk8G-eqskgdxSzpJFCNAALWMynzfFwo6v7VSCfAoOkxBprMjY72kw_7wazxkkWEfZpn-fua_wbGlw6iC2qDfs_OoC18AYObkyIrDOlybXveo' },
  { label: 'Cooking Classes', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqvBkA-nYBApGfQn_Knxxe0LJYQL3dDW74GLayOT0lnKveeTSjGWuX8ufRJ0Gwd9EBbqM06yKtVUFQiHhiKb4U0sgR47VDvVwVIOmKaT2zJCLwdwUuUOPjnBbW9iRoUPDCZQoOPfwp92m3jvBRwBfbwGVroXs4nQulcLGDdmbSY658iayCcqMFsQ-Ocq8Wx87DKqx18WyivACLvZ0YR2Lk5FR6MIgTXv-28_CB_5J1myA8FRCGAu6VLBIay9W80mPsdD9zc46EaoU' },
  { label: 'Wine Tasting', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO5tgviRKYt3Nu_BS3S6jyl4dfI5pFCEPdyKK_8crtMLWaz0yz7v2YHz7qWZH3RIUMc5iJJOjVqkRsZtN3y_r-vhMjvSWvOJM73NC8lAi0KBwDVtYXUy4cJJhH3oqPfm6NbUYenqYWxL5g3FdFu1yS9Mw12k7zUutm_gUJGxzFZDGJyXGmPNGwpr-bbl3zyOBK6PEyNolSGI3gQXuufphxijte4B7xjlmni1czWVstCQe-mRFdZgCmALWEi9jGTfV-wppAdEmnGt8' },
  { label: 'Street Food Tours', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqvBkA-nYBApGfQn_Knxxe0LJYQL3dDW74GLayOT0lnKveeTSjGWuX8ufRJ0Gwd9EBbqM06yKtVUFQiHhiKb4U0sgR47VDvVwVIOmKaT2zJCLwdwUuUOPjnBbW9iRoUPDCZQoOPfwp92m3jvBRwBfbwGVroXs4nQulcLGDdmbSY658iayCcqMFsQ-Ocq8Wx87DKqx18WyivACLvZ0YR2Lk5FR6MIgTXv-28_CB_5J1myA8FRCGAu6VLBIay9W80mPsdD9zc46EaoU' },
  { label: 'Dessert Workshops', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhzS43D12srM6LPo7dneJPJ4fHi0kv38-Jmus9Nxszd7UfhqXSXz0aFEkIENMCnCjBJH4J_yQxDoYJ5_tH5_8Kbj3rm4ysEtGBWi_bYTmhVhIguDqfB76HyUqwGeAyZibc4b1Zc042Ii_LXAF8bkZgUdakoYo6VbIXJQwZyvxP4MzYOEQTzWCyyrznOm92UHv_ajjyuMEu9Oinm1q4pKwhewoiSKF5Y1liWQtCoiTUq0TD4UJQeHHKpd_Ukp5nA4LLvhIU9lQIbq4' },
];

export const testimonials = [
  { title: 'Amazing Experience!', quote: "The Omakase masterclass was beyond my expectations. The chef was incredibly knowledgeable and the fish was the freshest I've ever tasted. A perfect birthday gift!", author: 'Sarah Chen', location: 'New York, NY', initials: 'SC' },
  { title: 'Unforgettable Wine Tour', quote: "Napa Valley tour was organized perfectly. From the pickup to the private cellar tastings, every detail was handled. Highly recommend for any wine lover.", author: 'Michael Jensen', location: 'Austin, TX', initials: 'MJ' },
  { title: "Chef's Dinner was Divine", quote: "Gifted my parents the Michelin Chef dinner in Paris. They haven't stopped talking about it! The service and the food were world-class.", author: 'Emma Laurent', location: 'London, UK', initials: 'EL' },
];

export const heroBackgroundImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuArunycJl6B1F3ocHiFYucgLcN1FMnjFm-o47CQJ-7pV1Vgl4J27Q4l8FTQVe299IJxifj4Pa2oK_sbvRcqgXypj3I9-m4D-iMFKoy7ICD-baX4MSr6APclxO5KKHog7jqcaZz23gSVrCco0WhImHC7xT_rQg3KDHlfl_B5V8PYvDFfBwe9IUgS6h4QJHOGNZHP81gZlaTqiGTznyW2SwQV9dCgCGUn_aWA-YfLXSrhdUBF0AyMX9NnUsuaOTDYrU_TBSjV33PFTfg';

export const whyLoveUsImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZkK-YeZyYLrVQyjBHxmyeBNvKByKLx861OPhQZ3smMp36RfoLzMrRtMYs4XVP7YJNTJ6aOm6yAjSTvwcyx84Inb4LkW-UOj_h0XPYRxM0yb6p_YCBe2YfuAdkxogkxKfou6KIrp3Iz2hsLv2oZKDhxX76dRc_U2AwivBoBOkXO42G4ZDJPL-oVZoS3s05QNFGE8ZtxPqOkvkQE3L1fwGwDe56wcMCnYKiMRMHYzncvBJJPeyL-QxPtyDEAclJB7LJdSqk-JbcT7Q';
