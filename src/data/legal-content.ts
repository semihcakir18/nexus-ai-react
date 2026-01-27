export type LegalSection = {
  title: string;
  content: (
    | { type: "paragraph"; text: string }
    | { type: "list"; items: string[] }
    | { type: "warning"; text: string }
    | { type: "highlight"; text: string }
    | { type: "danger"; text: string }
    | { type: "sub-section"; title: string; content: (string | { type: "list"; items: string[] })[] }
  )[];
};

export type LegalDocument = {
  title: string;
  lastUpdated: string;
  intro?: string[];
  sections: LegalSection[];
};

export const legalContent: Record<"privacy" | "terms", Record<"en" | "tr", LegalDocument>> = {
  privacy: {
    en: {
      title: "Privacy Policy",
      lastUpdated: "January 28, 2026",
      intro: [
        "Welcome to WhatsCargo. This Privacy Policy explains how we handle information when you use our application. We are committed to protecting your privacy and being transparent about our data practices.",
        "WhatsCargo is an automated messaging assistant that helps users respond to cargo-related WhatsApp messages. The application is designed with privacy as a core principle, processing message content locally on your device."
      ],
      sections: [
        {
          title: "",
          content: [
             { type: "highlight", text: "Important: WhatsCargo is not affiliated with WhatsApp Inc. or Meta Platforms Inc." }
          ]
        },
        {
          title: "1. Local Data Processing",
          content: [
            { type: "paragraph", text: "To protect your privacy, the following information is processed exclusively on your device and is never transmitted to our servers:" },
            {
              type: "list",
              items: [
                "WhatsApp Message Content: Incoming message text is analyzed locally to detect cargo-related keywords and generate automated replies. This content remains on your device.",
                "Contact Information: Sender names from WhatsApp notifications are processed locally for reply functionality. We do not access, collect, or store your contacts.",
                "Chat Metadata: Any metadata associated with WhatsApp conversations is processed locally and is not transmitted externally."
              ]
            }
          ]
        },
        {
          title: "2. Information Collected Through Third-Party Services",
          content: [
            { type: "paragraph", text: "Our application integrates third-party services that may collect certain information independently under their own privacy policies:" },
            {
              type: "sub-section",
              title: "2.1 Firebase Services",
              content: [
                "We use Firebase for application configuration, authentication, and purchase validation. Firebase may collect device identifiers, usage statistics, and crash diagnostics in accordance with Google's privacy practices."
              ]
            },
            {
              type: "sub-section",
              title: "2.2 Google AdMob",
              content: [
                "Advertisements are served through Google AdMob, which may collect advertising identifiers, device information, and interaction data to provide personalized or contextual advertisements."
              ]
            },
            {
              type: "sub-section",
              title: "2.3 Technical and Diagnostic Information",
              content: [
                "The Android operating system and integrated SDKs may automatically generate technical information, including:",
                {
                   type: "list",
                   items: [
                     "Device type and model",
                     "Operating system version",
                     "Application version",
                     "General usage patterns",
                     "Crash logs and error reports"
                   ]
                },
                "This information is typically anonymous or pseudonymous and is used for application stability and compatibility purposes."
              ]
            }
          ]
        },
        {
          title: "3. Optional Location Information",
          content: [
            { type: "paragraph", text: "If you choose to enable the location sharing feature, your device location may be accessed to include in automated replies. Location data is:" },
            {
              type: "list",
              items: [
                "Only accessed when you explicitly enable this feature",
                "Used solely for the purpose you configure",
                "Not stored persistently by our application",
                "Not transmitted to our servers"
              ]
            },
            { type: "paragraph", text: "You may disable location sharing at any time through the application settings or your device permissions." }
          ]
        },
        {
          title: "4. Information We Do Not Collect",
          content: [
            { type: "paragraph", text: "To be clear about our practices, WhatsCargo does NOT:" },
            {
              type: "list",
              items: [
                "Upload WhatsApp message content to any server",
                "Collect or store your WhatsApp contacts",
                "Access your WhatsApp chat history beyond active notifications",
                "Share message content with third parties",
                "Create profiles based on your messaging behavior",
                "Sell any personal information to third parties"
              ]
            }
          ]
        },
        {
          title: "5. Data Security",
          content: [
            { type: "paragraph", text: "We implement appropriate technical and organizational measures to protect information processed by our application:" },
            {
              type: "list",
              items: [
                "Local processing of sensitive message content ensures data does not leave your device",
                "We do not maintain servers that store your personal message data",
                "Third-party services we integrate employ industry-standard security practices"
              ]
            }
          ]
        },
        {
          title: "6. Your Rights and Choices",
          content: [
            {
              type: "sub-section",
              title: "6.1 Access and Control",
              content: [
                {
                   type: "list",
                   items: [
                     "Review and modify your application settings at any time",
                     "Enable or disable specific features such as location sharing",
                     "Clear locally stored message logs",
                     "Revoke notification access permissions through your device settings"
                   ]
                }
              ]
            },
            {
              type: "sub-section",
              title: "6.2 GDPR Rights (European Users)",
              content: [
                "If you are located in the European Economic Area, you have rights including:",
                {
                   type: "list",
                    items: [
                     "Right to access information about data processing",
                     "Right to rectification of inaccurate data",
                     "Right to erasure of personal data",
                     "Right to restrict processing",
                     "Right to object to processing"
                   ]
                }
              ]
            }
          ]
        },
        {
          title: "7. Children's Privacy",
          content: [
            { type: "paragraph", text: "WhatsCargo is not directed to children under the age of 13 (or the applicable age of digital consent in your jurisdiction). We do not knowingly collect personal information from children." }
          ]
        },
        {
          title: "8. Changes to This Privacy Policy",
          content: [
            { type: "paragraph", text: "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will:" },
            {
              type: "list",
              items: [
                "Update the \"Last Updated\" date at the top of this policy",
                "Notify you through the application or other appropriate means"
              ]
            }
          ]
        },
        {
          title: "9. Contact Information",
          content: [
            { type: "paragraph", text: "If you have questions or requests regarding this Privacy Policy or our data practices, please contact us at:" },
            { type: "paragraph", text: "Email: contact@nexustechai.com" },
            { type: "warning", text: "Consent: By installing and using WhatsCargo, you acknowledge that you have read and understood this Privacy Policy and consent to the processing of information as described herein." }
          ]
        }
      ]
    },
    tr: {
      title: "Gizlilik Politikası",
      lastUpdated: "28 Ocak 2026",
      intro: [
        "WhatsCargo'ya hoş geldiniz. Bu Gizlilik Politikası, uygulamamızı kullanırken bilgilerin nasıl işlendiğini açıklar. Gizliliğinizi korumaya ve veri uygulamalarımız hakkında şeffaf olmaya kararlıyız.",
        "WhatsCargo, kullanıcıların kargo ile ilgili WhatsApp mesajlarına yanıt vermesine yardımcı olan otomatik bir mesajlaşma asistanıdır. Uygulama, gizlilik temel bir ilke olarak tasarlanmış olup, mesaj içeriğini cihazınızda yerel olarak işler."
      ],
      sections: [
        {
          title: "",
          content: [
             { type: "highlight", text: "Önemli: WhatsCargo, WhatsApp Inc. veya Meta Platforms Inc. ile bağlantılı değildir." }
          ]
        },
        {
          title: "1. Yerel Veri İşleme",
          content: [
            { type: "paragraph", text: "Gizliliğinizi korumak için, aşağıdaki bilgiler yalnızca cihazınızda işlenir ve sunucularımıza asla iletilmez:" },
            {
              type: "list",
              items: [
                "WhatsApp Mesaj İçeriği: Gelen mesaj metni, kargo ile ilgili anahtar kelimeleri tespit etmek ve otomatik yanıtlar oluşturmak için yerel olarak analiz edilir. Bu içerik cihazınızda kalır.",
                "Kişi Bilgileri: WhatsApp bildirimlerinden gelen gönderen adları, yanıt işlevi için yerel olarak işlenir. Kişilerinize erişmez, toplamaz veya saklamayız.",
                "Sohbet Meta Verileri: WhatsApp konuşmalarıyla ilişkili tüm meta veriler yerel olarak işlenir ve harici olarak iletilmez."
              ]
            }
          ]
        },
        {
          title: "2. Üçüncü Taraf Hizmetleri Aracılığıyla Toplanan Bilgiler",
          content: [
            { type: "paragraph", text: "Uygulamamız, kendi gizlilik politikalarına göre bağımsız olarak belirli bilgiler toplayabilen üçüncü taraf hizmetlerini entegre eder:" },
            {
              type: "sub-section",
              title: "2.1 Firebase Hizmetleri",
              content: [
                "Uygulama yapılandırması, kimlik doğrulama ve satın alma doğrulaması için Firebase kullanıyoruz. Firebase, Google'ın gizlilik uygulamalarına uygun olarak cihaz tanımlayıcıları, kullanım istatistikleri ve çökme teşhisleri toplayabilir."
              ]
            },
            {
              type: "sub-section",
              title: "2.2 Google AdMob",
              content: [
                "Reklamlar Google AdMob aracılığıyla sunulur ve kişiselleştirilmiş veya bağlamsal reklamlar sağlamak için reklam tanımlayıcıları, cihaz bilgileri ve etkileşim verilerini toplayabilir."
              ]
            },
            {
              type: "sub-section",
              title: "2.3 Teknik ve Tanı Bilgileri",
              content: [
                "Android işletim sistemi ve entegre SDK'lar, aşağıdakileri içeren teknik bilgileri otomatik olarak oluşturabilir:",
                {
                   type: "list",
                   items: [
                     "Cihaz türü ve modeli",
                     "İşletim sistemi sürümü",
                     "Uygulama sürümü",
                     "Genel kullanım kalıpları",
                     "Çökme günlükleri ve hata raporları"
                   ]
                },
                "Bu bilgiler genellikle anonim veya takma adldır ve uygulama kararlılığı ve uyumluluk amaçları için kullanılır."
              ]
            }
          ]
        },
        {
          title: "3. İsteğe Bağlı Konum Bilgisi",
          content: [
            { type: "paragraph", text: "Konum paylaşımı özelliğini etkinleştirmeyi seçerseniz, cihaz konumunuza otomatik yanıtlara dahil etmek için erişilebilir. Konum verileri:" },
            {
              type: "list",
              items: [
                "Yalnızca bu özelliği açıkça etkinleştirdiğinizde erişilir",
                "Yalnızca yapılandırdığınız amaç için kullanılır",
                "Uygulamamız tarafından kalıcı olarak saklanmaz",
                "Sunucularımıza iletilmez"
              ]
            },
            { type: "paragraph", text: "Konum paylaşımını uygulama ayarları veya cihaz izinleri aracılığıyla istediğiniz zaman devre dışı bırakabilirsiniz." }
          ]
        },
        {
          title: "4. Toplamadığımız Bilgiler",
          content: [
            { type: "paragraph", text: "Uygulamalarımız hakkında net olmak için, WhatsCargo:" },
            {
              type: "list",
              items: [
                "WhatsApp mesaj içeriğini herhangi bir sunucuya yüklemez",
                "WhatsApp kişilerinizi toplamaz veya saklamaz",
                "Aktif bildirimler dışında WhatsApp sohbet geçmişinize erişmez",
                "Mesaj içeriğini üçüncü taraflarla paylaşmaz",
                "Mesajlaşma davranışlarınıza dayalı profiller oluşturmaz",
                "Herhangi bir kişisel bilgiyi üçüncü taraflara satmaz"
              ]
            }
          ]
        },
        {
          title: "5. Veri Güvenliği",
          content: [
            { type: "paragraph", text: "Uygulamamız tarafından işlenen bilgileri korumak için uygun teknik ve organizasyonel önlemler uyguluyoruz:" },
            {
              type: "list",
              items: [
                "Hassas mesaj içeriğinin yerel işlenmesi, verilerin cihazınızdan ayrılmamasını sağlar",
                "Kişisel mesaj verilerinizi saklayan sunucular tutmuyoruz",
                "Entegre ettiğimiz üçüncü taraf hizmetleri, endüstri standardı güvenlik uygulamalarını kullanır"
              ]
            }
          ]
        },
        {
          title: "6. Haklarınız ve Seçenekleriniz",
          content: [
            {
              type: "sub-section",
              title: "6.1 Erişim ve Kontrol",
              content: [
                {
                   type: "list",
                   items: [
                     "Uygulama ayarlarınızı istediğiniz zaman inceleyin ve değiştirin",
                     "Konum paylaşımı gibi belirli özellikleri etkinleştirin veya devre dışı bırakın",
                     "Yerel olarak saklanan mesaj günlüklerini temizleyin",
                     "Cihaz ayarlarınız aracılığıyla bildirim erişim izinlerini iptal edin"
                   ]
                }
              ]
            },
            {
              type: "sub-section",
              title: "6.2 GDPR / KVKK Hakları",
              content: [
                "Avrupa Ekonomik Alanında veya Türkiye'de bulunuyorsanız, aşağıdaki haklara sahipsiniz:",
                {
                   type: "list",
                    items: [
                     "Veri işleme hakkında bilgilere erişim hakkı",
                     "Yanlış verilerin düzeltilmesi hakkı",
                     "Kişisel verilerin silinmesi hakkı",
                     "İşlemeyi kısıtlama hakkı",
                     "İşlemeye itiraz etme hakkı"
                   ]
                }
              ]
            }
          ]
        },
        {
          title: "7. Çocukların Gizliliği",
          content: [
            { type: "paragraph", text: "WhatsCargo, 13 yaşın altındaki (veya yargı bölgenizde dijital rızanın geçerli yaşı) çocuklara yönelik değildir. Çocuklardan bilerek kişisel bilgi toplamıyoruz." }
          ]
        },
        {
          title: "8. Bu Gizlilik Politikasındaki Değişiklikler",
          content: [
            { type: "paragraph", text: "Uygulamalarımız, teknoloji, yasal gereklilikler veya diğer faktörlerdeki değişiklikleri yansıtmak için bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler yaptığımızda:" },
            {
              type: "list",
              items: [
                "Bu politikanın başındaki \"Son Güncelleme\" tarihini güncelleriz",
                "Sizi uygulama aracılığıyla veya diğer uygun yollarla bilgilendiririz"
              ]
            }
          ]
        },
        {
          title: "9. İletişim",
          content: [
            { type: "paragraph", text: "Bu Gizlilik Politikası veya veri uygulamalarımız hakkında sorularınız veya talepleriniz için lütfen bizimle iletişime geçin:" },
            { type: "paragraph", text: "E-posta: contact@nexustechai.com" },
            { type: "warning", text: "Onay: WhatsCargo'yu yükleyerek ve kullanarak, bu Gizlilik Politikasını okuduğunuzu, anladığınızı ve burada açıklandığı şekilde bilgilerin işlenmesine onay verdiğinizi kabul edersiniz." }
          ]
        }
      ]
    }
  },
  terms: {
    en: {
      title: "Terms of Service",
      lastUpdated: "January 28, 2026",
      intro: [],
      sections: [
        {
            title: "1. Acceptance of Terms",
            content: [
                { type: "paragraph", text: "By using WhatsCargo, you agree to this agreement and our Privacy Policy. If you do not agree, please do not use the application." }
            ]
        },
        {
            title: "2. Service Description",
            content: [
                { type: "paragraph", text: "WhatsCargo automatically replies to incoming cargo-related WhatsApp messages using templates you configure. This application is not affiliated with WhatsApp Inc. or Meta Platforms Inc." }
            ]
        },
        {
            title: "3. Local Data Processing",
            content: [
                { type: "paragraph", text: "To protect your privacy:" },
                {
                    type: "list",
                    items: [
                        "WhatsApp message content, contacts, and chat data are processed only on your device",
                        "This data is not transmitted to our servers, stored, or shared with third parties",
                        "We do not collect or sell your personal chat data"
                    ]
                }
            ]
        },
        {
            title: "4. Third-Party Services",
            content: [
                { type: "paragraph", text: "The application uses the following third-party services:" },
                {
                    type: "list",
                    items: [
                        "Google AdMob: For displaying advertisements",
                        "Firebase: For app configuration and purchase validation"
                    ]
                },
                { type: "paragraph", text: "These services may collect device identifiers and anonymous technical data under their own privacy policies. They do not have access to your message content or contacts." },
                { type: "paragraph", text: "The Android operating system and integrated SDKs may generate anonymous technical and diagnostic data for application stability." }
            ]
        },
        {
            title: "5. Permissions and User Control",
            content: [
                {
                    type: "sub-section",
                    title: "Required Permissions:",
                    content: [
                        { type: "list", items: [
                            "Notification Access: To detect incoming WhatsApp messages",
                            "Foreground Service: To keep the app running in the background",
                            "Internet Access: For ads and app services"
                        ] }
                    ]
                },
                {
                    type: "sub-section",
                    title: "Optional Permissions:",
                    content: [
                        { type: "list", items: [
                            "Location Access: Used only when you enable it and not transmitted to our servers"
                        ] }
                    ]
                },
                { type: "paragraph", text: "You can revoke all permissions at any time through your device settings." }
            ]
        },
        {
            title: "6. User Responsibilities",
            content: [
                { type: "paragraph", text: "You agree to:" },
                {
                    type: "list",
                    items: [
                        "Use the application only for lawful purposes",
                        "Not send spam, harassment, or abusive messages",
                        "Comply with WhatsApp Terms of Service",
                        "Take full responsibility for the content of automated messages you send",
                        "Not reverse engineer, copy, or modify the application"
                    ]
                },
                { type: "danger", text: "Important Warning: Use of automated messaging tools may carry risks under WhatsApp policies. We are not responsible for any actions WhatsApp takes regarding your account." }
            ]
        },
        {
            title: "7. Purchases",
            content: [
                { type: "paragraph", text: "Premium features may be offered through in-app purchases. Payments are processed through Google Play. Refunds are subject to Google Play refund policy." }
            ]
        },
        {
            title: "8. Limitations and Disclaimers",
            content: [
                { type: "paragraph", text: "WhatsCargo is provided \"as is.\" We do not guarantee:" },
                { type: "list", items: [
                    "Uninterrupted or error-free operation",
                    "Compatibility with all devices or WhatsApp versions",
                    "Continued compatibility with WhatsApp policy changes"
                ] },
                { type: "paragraph", text: "We are not liable for:" },
                { type: "list", items: [
                    "WhatsApp account restrictions or terminations",
                    "Consequences of messages you send",
                    "Availability of third-party services",
                    "Indirect, incidental, or consequential damages"
                ] }
            ]
        },
        {
            title: "9. Children's Privacy",
            content: [
                { type: "paragraph", text: "WhatsCargo is not intended for children under 13. We do not knowingly collect data from children." }
            ]
        },
        {
            title: "10. Changes",
            content: [
                { type: "paragraph", text: "We may update this agreement periodically. Material changes will be communicated through the app. Continued use after changes constitutes acceptance of the updated terms." }
            ]
        },
        {
            title: "11. Termination",
            content: [
                { type: "paragraph", text: "You may terminate this agreement at any time by uninstalling the application. We reserve the right to suspend or terminate your access for violation of these terms." }
            ]
        },
        {
            title: "12. Contact",
            content: [
                { type: "paragraph", text: "For questions: contact@nexustechai.com" },
                { type: "warning", text: "Acknowledgment: By using WhatsCargo, you confirm that you have read, understood, and agree to this agreement and our Privacy Policy." }
            ]
        }
      ]
    },
    tr: {
      title: "Kullanım Koşulları",
      lastUpdated: "28 Ocak 2026",
      intro: [],
      sections: [
        {
            title: "1. Koşulların Kabulü",
            content: [
                { type: "paragraph", text: "WhatsCargo'yu kullanarak bu sözleşmeyi ve Gizlilik Politikamızı kabul etmiş olursunuz. Kabul etmiyorsanız, lütfen uygulamayı kullanmayınız." }
            ]
        },
        {
            title: "2. Hizmet Tanımı",
            content: [
                { type: "paragraph", text: "WhatsCargo, gelen kargo ile ilgili WhatsApp mesajlarına yapılandırdığınız şablonları kullanarak otomatik olarak yanıt verir. Bu uygulama WhatsApp Inc. veya Meta Platforms Inc. ile bağlantılı değildir." }
            ]
        },
        {
            title: "3. Yerel Veri İşleme",
            content: [
                { type: "paragraph", text: "Gizliliğinizi korumak için:" },
                {
                    type: "list",
                    items: [
                        "WhatsApp mesaj içerikleri, kişiler ve sohbet verileri yalnızca cihazınızda işlenir",
                        "Bu veriler sunucularımıza aktarılmaz, saklanmaz veya üçüncü taraflarla paylaşılmaz",
                        "Kişisel sohbet verileriniz tarafımızca toplanmaz veya satılmaz"
                    ]
                }
            ]
        },
        {
            title: "4. Üçüncü Taraf Hizmetleri",
            content: [
                { type: "paragraph", text: "Uygulama aşağıdaki üçüncü taraf hizmetlerini kullanır:" },
                {
                    type: "list",
                    items: [
                        "Google AdMob: Reklam gösterimi için kullanılır",
                        "Firebase: Uygulama yapılandırması ve satın alma doğrulaması için kullanılır"
                    ]
                },
                { type: "paragraph", text: "Bu hizmetler kendi gizlilik politikaları kapsamında cihaz tanımlayıcıları ve anonim teknik veriler toplayabilir. Mesaj içeriklerinize veya kişilerinize erişimleri yoktur." },
                { type: "paragraph", text: "Android işletim sistemi ve entegre SDK'lar, uygulama kararlılığı için anonim teknik ve tanı verileri üretebilir." }
            ]
        },
        {
            title: "5. İzinler ve Kullanıcı Kontrolü",
            content: [
                {
                    type: "sub-section",
                    title: "Gerekli İzinler:",
                    content: [
                        { type: "list", items: [
                            "Bildirim Erişimi: Gelen WhatsApp mesajlarını algılamak için",
                            "Ön Plan Hizmeti: Uygulamanın arka planda çalışması için",
                            "İnternet Erişimi: Reklamlar ve uygulama hizmetleri için"
                        ] }
                    ]
                },
                {
                    type: "sub-section",
                    title: "İsteğe Bağlı İzinler:",
                    content: [
                        { type: "list", items: [
                            "Konum Erişimi: Yalnızca siz etkinleştirdiğinizde kullanılır ve sunucularımıza aktarılmaz"
                        ] }
                    ]
                },
                { type: "paragraph", text: "Tüm izinleri cihaz ayarlarından istediğiniz zaman iptal edebilirsiniz." }
            ]
        },
        {
            title: "6. Kullanıcı Sorumlulukları",
            content: [
                { type: "paragraph", text: "Aşağıdakileri kabul edersiniz:" },
                {
                    type: "list",
                    items: [
                        "Uygulamayı yalnızca yasal amaçlarla kullanmak",
                        "Spam, taciz veya kötüye kullanım amaçlı mesaj göndermemek",
                        "WhatsApp Hizmet Şartlarına uymak",
                        "Gönderdiğiniz otomatik mesajların içeriğinden tamamen siz sorumlusunuz",
                        "Uygulamanın tersine mühendislik, kopyalama veya değiştirilmesi yasaktır"
                    ]
                },
                { type: "danger", text: "Önemli Uyarı: Otomatik mesajlaşma araçlarının kullanımı WhatsApp politikalarına göre risk taşıyabilir. Hesabınızla ilgili WhatsApp tarafından alınan kararlardan sorumlu değiliz." }
            ]
        },
        {
            title: "7. Satın Almalar",
            content: [
                { type: "paragraph", text: "Premium özellikler uygulama içi satın alma ile sunulabilir. Ödemeler Google Play üzerinden işlenir. İadeler Google Play iade politikasına tabidir." }
            ]
        },
        {
            title: "8. Sorumluluk Sınırları",
            content: [
                { type: "paragraph", text: "WhatsCargo \"olduğu gibi\" sunulmaktadır. Şunları garanti etmiyoruz:" },
                { type: "list", items: [
                    "Kesintisiz veya hatasız çalışma",
                    "Tüm cihazlar veya WhatsApp sürümleriyle uyumluluk",
                    "WhatsApp politika değişikliklerine karşı sürekli uyumluluk"
                ] },
                { type: "paragraph", text: "Aşağıdaki durumlardan sorumlu değiliz:" },
                { type: "list", items: [
                    "WhatsApp hesap kısıtlamaları veya kapatmaları",
                    "Gönderdiğiniz mesajların sonuçları",
                    "Üçüncü taraf hizmetlerinin kullanılabilirliği",
                    "Dolaylı, arızi veya sonuç olarak ortaya çıkan zararlar"
                ] }
            ]
        },
        {
            title: "9. Çocukların Gizliliği",
            content: [
                { type: "paragraph", text: "WhatsCargo 13 yaşın altındaki çocuklara yönelik değildir. Çocuklardan bilerek veri toplamayız." }
            ]
        },
        {
            title: "10. Değişiklikler",
            content: [
                { type: "paragraph", text: "Bu sözleşmeyi zaman zaman güncelleyebiliriz. Önemli değişiklikler uygulama içinden bildirilecektir. Değişikliklerden sonra uygulamayı kullanmaya devam etmeniz, güncellenmiş şartları kabul ettiğiniz anlamına gelir." }
            ]
        },
        {
            title: "11. Fesih",
            content: [
                { type: "paragraph", text: "Uygulamayı kaldırarak bu sözleşmeyi istediğiniz zaman sonlandırabilirsiniz. Şartların ihlali durumunda erişiminizi askıya alma veya sonlandırma hakkımız saklıdır." }
            ]
        },
        {
            title: "12. İletişim",
            content: [
                { type: "paragraph", text: "Sorularınız için: contact@nexustechai.com" },
                { type: "warning", text: "Onay: WhatsCargo'yu kullanarak bu sözleşmeyi ve Gizlilik Politikamızı okuduğunuzu, anladığınızı ve kabul ettiğinizi onaylıyorsunuz." }
            ]
        }
      ]
    }
  }
};
