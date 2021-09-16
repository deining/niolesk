import exampleData from '../examples/data';

const krokiInfo = exampleData.filter(example => example.default).reduce((previous, current) => {
    previous[current.diagramType] = { name: current.title, example: current.example, }
    return previous;
}, {});

// const krokiInfo = {
//     blockdiag: { name: 'BlockDiag', example: 'eNpdzDEKQjEQhOHeU4zpPYFoYesRxGJ9bwghMSsbUYJ4d10UCZbDfPynolOek0Q8FsDeNCestoisNLmy-Qg7R3Blcm5hPcr0ITdaB6X15fv-_YdJixo2CNHI2lmK3sPRA__RwV5SzV80ZAegJjXSyfMFptc71w==' },
//     bpmn: { name: 'BPMN', example: 'eNrNXF9znLYWf8-nYPY9XiEJAZ7YmSZ2b-_cJPU0aadvHgzyLpNd2AtsbOepH6RzP1w_yZXEf5BAUJtuX9KKo6PzO_-PtM2bt4_7nfGNJmkYRxcr8wysDBr5cRBGm4vVr19-fO2s3l6-epPSvRdloX8e0PswCjNGnRpsa5SeP6bhxWqbZYfz9frh4eHsAZ3FyWYNATDXv3_88Nnfsr2vwyjNvMinq2JX0N4U7zdiV3qg_vrqiu02AbAgXl_9u9xxd9hHQ7ve3Xz8JNsX-JonvS93lGB1z_r489X1h5URBherWxPalouBiyBwnJWRecmGZp-8PU0Pnk9bHLMkTOOM-tszP96vG4pdd7nQx0OcZDS5WL339sco8IyPcUB3NKk__Vab0CTMipevDKO2Gjs-9Ta0KyIymbnXWqQYoR7pIYl9Rp2TktcmU0F6_Uj9Y-bd7RjWe2-XUiFJc9fOi-hnmoldu5Ttw8gpiLpkJWdiMTkjpsSLlc9Qf63Imxvud_HDJ6aWX-j95c9JQJNfqE_DbzS4_kaj7M1aSjjCR5wN5--18by9773d_v0xzeI9Tb546ddhLo2vXGvDusSYlLo8hN-_ewaLz_uVBhhM0LOK4ZRiME9mZkqejLv4SUcQy8SzLWIRa741TTJDAZ1F5vndgGCJMcmEkwrl9H23VJT4YiTFJ0nMxMdsE7PMLaRFoHF09aW3p4h3cdBVlYOMYpmhU2SMFrIaQhfcwUu83Y7u_uVl9MF7qiMalqgkOEJWgfZSHNWXYeyuqYW9vQcp9zQ-dPB04YYRy8V7GoTs83sv87e1XfN8UKL-64__PWxpwuIhNfZPhgjFt3_98eeYNlrI1Npo7rExmaxBGzsv4D11EWnpVK60rmozlgeFIrvJsVQpXzf84sNqTCfODJ0QHQ_hciplz_NoKfE77ys1si3NzT9qejQ9EBB8DpFZxi1FvsqTtb7ULQl0pcbPIjWxSqmLdGocvKc9T6hjMuMZMs92DhoF7SxhEu3cqBfZPLzCiEVXN077sVgK0ytS9L9HNhjQH1nZqwRFVVu2MtL4mPh5xMsqWN4I5wmhSP9rvTOg9IwykNp8haNq8sUqvoJJhy93JU2-RMmXM-nogZtaj69rqvgKZXb42tp6cNEEvkLlWnxtLNdDP3nPldyuO8ie5Hbbgv1D80lm3R1ltEYh03XGRiGoNwp1Oj_hECWmn47RhvXE93GizLPN_GNCSyf_qBu1KnN-ZoOln_1www9tltd83fC00n5bHL0UatrOc6R9Zqh2w6wpsT29I8AQzE763AbvvJQGnc7YdIBm9m-frtcL4hndNIZwcjeNoVYJ72lhWj8NAWzPsgOzUVtzcIYWXqIjrnPJjI54RDmmWyqHAIMBPGY0HVUMnqEYoqWYLGTZt6MW2dTN6a4YolIt7VBSMpk_T3Bd1VX7B7bKk65ug9uGr6kyBJ4j0yFQ9TA3LIHoSzwj0z1PS46sqiW_9jJ9iWc05Pj5GnIMSLMqs5KSelmY3ofjiWagQZ_ZdLPKqmx7zFbX0y_kWn0VK4TSA_rs2p2bqLtaJ7DCpYIgmHT4OkCbr3JWEEzafEXx0OSLp_DleVeTr3JWEEw6fBHR5qvsjAXoNl-RRfT4IqXdhHCz7aaexYRwHXktS5uvUr-CSWe2AURzLvDj3c67ixNPVHZxJVVXdMuyV5JLUPZHePDqnGJVY5cIKKMcT1ZGcWSlWQlYCT_-iNJiyPJJEPfZmRJ2RW_SHmOddmcV81Z6LFplg7_WaRhOcCz5iChlW9lfNIaHTGMkl4eDlHulon0c0ScN15VfI0h5g5b6Na4o5OlMwtu2wKzJvM4_jfhohYL4lj_TnvMX0qvQ2yTeXhz8pXrs_C1Mw_j1bWWaXxmjbEcDoyBfGUHsH_k1nWDKpUxoGu-O-X-55AzwfyCxAXQcUL4dNg--ES9NfOF6RzknRYS2d33eegcqE_a2iNcWw2ItTH-Kk_B7zKTdXayy5EibT1iBf_4uPkZBajxerExmoKf8j4cwyLbsXwFmdtzScLNlHKFbe15Xtg_eHd01O-Ku3JMBiYTRRSQWp0NCdo3JBVYNCSF7OUi35UtxF5VYnIAK91E5dgOVaeJlUYk3256t-OJ0VNghJ4NK5oHYmYOKAKBABdwFUckKYAuhhECFzHZze_F4KpDx_qsKLbB0ZEFZZEF1buA1jIeR61YAuLVKABguDIC3DT0AbFEFAJpOYQFcW6ABAC0JoF-d2-Wt-1kJioc_t0ozDaAaFHEWTgJEUlj5ohKAlUe8Bc2TACBasV5nYKrdChOcpyzongYA3pT2ALBFFQAC0EkBEI9ovcBmi8rMCouige1_PrCLe5u-_Gr95xHskpOoC72s2rsnUhcISwCx7ZNwIzHMds3AF5WZiJyW_I6k9eWLKvmRndc3F5xEfRYDbFd-vqiMAx6-XH7rJKJYXNn15GeLykKAc_2bDj4NAEiSR_miCoBl5gYwyWn0EuLGpQuAL6oLATmlCBaXkj35LXUldhA-JfnFDWqvlwNqB3ItsmQEXwebwTKMZXcHuJ1Aw_MH7-kQh1EmIgCQuhVaj9MhBw_SEYIm0TXfXKaoiGtijoaQTENoSENi_uZDFASDiMppsUf3wohcWe_lmkOIHKiFCAKgR1eOmQsjl92-8EW1pLaVpxvRuK3H6TBwhr0YAU06Ux5lL6sh8ZzYS2cQDmhI2JBryDQHEYl7Vg26ssXp0b20b8gmKr5YvCdw4rsd_U8YMR5RHN2Kn2J4WRhtBrRDLEcrW5Z0uFsAun5WRqImXc9vX9p_ZPebcCjCSHHpN-YXZeOysF_YspxhD-YMaGlmQeLo0RX3VwtnS3Fc35ZDlQ9hvRhHhOjR2c4_kgtkUwHpTAUdLy5sRBq_FpZ6McB6dOV9TZfuhb1d9pbEFwdsBJ36dnWtQYeHK59lw0l0EOFFo0LmG3jQN1xTLypcpBcV5QixeFTIXkPQUG-AUH5dZFnD3ROy0CS6seip7puXjR7xP1j0NYSHpqkiY44hqi6gl0UkfnnXvyC0hrxdz4nF06sOXXFjurCzY9nYhwfHPlIMP2IIGjJlkQ606Sw4kgiJHh12tegQAZPoTrWIY1m6wnAwGC15SVHQIThMB4u7Kl06DJYtZRDLGryhdCUetrktR8aPkm7Mx8v74B7dSydq2UUAGmrqUXGdNXYRUNKNRY-Lp5CJX0Qs6RmyJgcONTnY0ct-2NXLfuVF-9Ke4SLZ5Rgauhwj-VUNxiOVrKCzrOFGuXrttxa1ufgNfK_U24ODLtRrbMtXw8VHdyIb3Ye8GNl6oztSjeQqOnu4ApiuOY3uNC9YsawBxoMNsGPqdRHlu8_f96HW8k35t5a0Vouf5V6-avzst_GXFV2--j9LkrJU' },
//     bytefield: { name: 'Bytefield', example: 'eNqllcuOmzAUhvd5iiPPJiyQgDDMDNt20327QixMMBfF2BRMQzri3WsM4T7MpYkUC_P59_F_znGOIYmwEEUJbhDrcUEIg1c3SikF9ICNKMIGarTDcYbdCKX8OnJRtM3lKbtMqcDYos43PN8TR3hDqypySkaO2MFj9NRyCmQQFvgqD8CrXKc4IFRPCA5JcQDwylzuoCZ9-XhUZMBrOApSi-4FeG6GRdLqcyb0Mv1LwLQaX5Mzarn6cQNeSM0SHl4bcBOSxokA0260eRQFybggYTAJ4ZKyEHARl2MEZ06rjPVMqQ3z6zPAI6BS4EKg96if9Y_v-9AJkLjlZB-yALWx7kOmVMJ3iEkn9UIWhfksvZiabNSmORaXtnj3_GSd7BdMwOt9tpsR9rVtpa7-tI1cdgaAyqW21OyWrUWNoVgXkgmpdSWrsme36afhKGs1w8KVqBENtf2WaOuwdLoX3aZldPak_BfW9mc2us8ZtSVZg-e5OcUpu9fytStTRNtBMpMCdxofEBxNS0P-yq5uS_-t8J0xdk-OtR6lRSnWK3lJfoP3B8sWc-SiEzj99-S3vbAt3uIL-YJQLJtqtsFqBwOMlap68Y7E4HdPUrw4imrwjd6WGbKfDAteBuBeqdrs2TINGwZ_tT32Y1ife0pYLBLUX1--HMsqAHO8t1Yq9izSz8vEOAf0rSKAZU9QznPIecoEBDdB2stgIs5SCspOeWu0_bpn0Mn51LlZlS2jRQkXaOfgH5U5V2Qh89U0WPtp-B8VlYVf7ML4lfXWSyhLWX9Hd38uJTiTfYXgmXb4BwBAgK8=' },
//     seqdiag: { name: 'SeqDiag', example: 'eNorTi1MyUxMV6jmUlBIKsovL04tUlDQtVMoT00CMsuAvOicxKTUHAVbBSV31xAF_WKIBv3isnT9pMTiVDMTpVhroGaEBpD2gqL85NTi4nxk7c75eUDpEoWS1Aogka-QmZuYnoqu2UZXF6HZGslRIAm4MmuuWgA13z1R' },
//     actdiag: { name: 'ActDiag', example: 'eNpVTjkOwkAM7POK0fa8AEFDQUGNKBCFCdbKItmVjCFIKH9nj4Sj81yeodYuQh6vBhhUjLFYo43hwWr5lJ48N0nsKDDuN9ZizfjMHVZw-8S5QtX88aMcEpbgYfw0d1oWT_n349myIQ9Q6qtWjePcuNN4lalynvVNbyYmN8Di_4fxDQA-Q4A=' },
//     nwdiag: { name: 'NwDiag', example: 'eNrLK0_JTExXqOZSUMhLLSnPL8pWSMmtAvMVFBJTUopSi4sVbBWUjAwN9CpAUN_IRIkLLFuemmRgqBCNRZGhUqw1XIkRViVGECW1SPZm5pWkFuUl5mBabmhuhLDcGpftMFV4bIcpMYIpSQEaAmcZQVxUCwBCbklM' },
//     packetdiag: { name: 'PacketDiag', example: 'eNptkU9Pg0AQxe9-ijnqYRN2QSgYD6bGPzFpCW1jTGPMyk5hQ9mtsMjB-N0dIGk8cH2_mXkzb04yr9ApLQv4uQDI7bHXypVwC764IcFYhR8l6qJ0pEWkkegxfp3AxnZNjpDaxg2VPGQ-T-AeW6eNdNqaM_IFC31qwK8ODbWsuvoTm4GEAYtp1F1eGdsfURU1GvePxyGLYxoqnYT14dDiZOXRBh71Zdhi841qEsMEdtkj7BvrpENaV0Te-4Qi8li-zKJFAunmaRaRc7bZziHu0Tlvq1lEITw8zyPBuKBVXrVRth8lsWA8oGyWJeZV29WjGAQUMJnvmmKII7XauCkPHtLlMTlcrk9DxC1IoyCVSmlTXI0VsWBC0EQ1ZLanh56_59MWv39OCoi9' },
//     rackdiag: { name: 'RackDiag', example: 'eNorSkzOTslMTFeo5lJQMDQLtQZRVgqhAcEK0UahsSCusZWCi5NCcGpRWWoRiG9ipRCemoQkYIouYIYuYG6l4JOfmKLglJiTmJcMEbMAihkrBJdnliRnWHPVAgDhXSWB' },
//     c4plantuml: { name: 'C4 with PlantUML', example: 'eNp9UkFuwjAQvOcVW05Uopz6AErEgQMVKvQcGbNJLBwbeTeC_r4b40AQtLd4PDszO86MWAVuG5u9GKdtu0fI34vcO8YzT4_dRcaGLcLmhxgbSFewN6oKqoHSB1gKFBwyzJU7GFclbpatMZB3Y90S-wbDBEY9I0_QSLAP6AngS-AaYSesCZwM13CMEspGDJTWvnVM09FrdjEZ7y6KBcWjyP2RJjpZ6090tSNgD7pGfehcTbiTT_rF4szjRhl7M1i8dWegq-xWIpvoKjlXRgdPvmRYnHWtXIWAw4Fb9F7alVIkis6q_34SfcM-IIGyti9JCwBpe7GXh2gUG-9i-C-0g9ofOvomJKEJq5grfRhQ71fdoNtTyt-1lWY-0VT1zoeH8v-ZjkustuuLxLPJaw8p3UzG5Qf8BSot7V4=' },
//     ditaa: { name: 'Ditaa', example: 'eNpTUAABbV0o0OYC8xVqFKCgBiEQWpxahCKAqgLDDBCIA7KLUgtLU4tL4ApBoIwLSQNcV40CMqiBiXgX5Wdnoogg1EB1opmF5CyFODCCqVfIzEvLSSxJ5YILIJkI11OGbKI2KW51ySxJTMTtVhyORQkbBYSDaxQKivKTU4uLUaVr0N2LGgPaXACSblPX' },
//     erd: { name: 'Erd', example: 'eNqLDkgtKs7Pi-XSykvMTeXKSM1MzyjhKodQ2kmZRSUZ8Tn5yYklmfl58ZkpXFzRPlAeUAuQn5xZUslVXJJYksqVnF-aV1JUycUFMVJBS1fXUAGmGgCFAiQX' },
//     excalidraw: { name: 'Excalidraw', example: 'eNrVm1tT4koXhu_nV1h8twO7z4e58zioM3hARd01ZQUSIBoSTAKIU_Pfv05kk4OJBiVjjFVi0t3pTudhvWutbn9_2dio-fOxUfu2UTMeeppl6q42q30Nrk8N1zMdWxWh8NxzJm4vrDn0_bH37Z9_ohaNnjN6amVYxsiwfU_V-1edb2z8Dn_H-nGNnq_ZA8sIG4RFUVeQ0_TVlmOH3SIuMSEAiGUF09tR3fmGrkr7muUZUUlwqYaur4aIGDoSewdgvltv46vWVdRr37Sstj-3np5J6w0nbmxMnu86d0bH1P1hMK7U9WU7z1EzELVynclgaBuel2jjjLWe6c-DawAsrz5NwreN6MqDOqMiOg9bEJDqe9uxHDfo-38gPKLeu1rvbqCGYOtRHUg1rduP6swWTxTrZmiYg6Ef9CUbMnGwqGsjnGaKoISMUrQsCPob7-vhC_-VnqWh5o4Xs1HzgpPYWINh7j7Rsmi-KFKFWwaco_nj8AJf68SebbvOzY2oLcp_hZ9_vr4Fr9hTp_CCjHBBMGeF8eoegaMLn434D2d2Nb5HyDje3qw6XoytFy_SY0afPscLojfxBTHACDAJSLmAHWrbR7J-cntu2O359mSi2c6ZsxbAcL79ggLy2IO9xtftI2hO7mXdY-PWw84MnN43e6dV54uv2Xz1tS4AWXy9zX4JBiVDcThLwYsTsz-6H03AtAVah-AG7M2OR-vAS6JcvCDCShzpCoCd26PW2Wh24I_YyJl0e9_99mCr6oBJtm7AKKJoXfqIOBeQ0LL5glMGWrs7qOea37_XZ46sOyc_1sAXArl8QYGwejSAivPl9Dk7IJ2jg6bdNMEPBi88_6bqfEFA1gtY1yBdvbs2CwaJZFwyEfODS0Hs9nZy_Dg_tY2fU9xn1Bp7N0xbiwnLVUhlwQgDiJPiiLWtaffWuKhL67Lbc61Ds1sf3lYeMYTWi5hgwpDsOWLsbYRJLASj6qdcwujJyeNwdjO5v7txt7QOmv10zbNihPnGg58Fl4C5bEEhJIAQycJsTV3dxwf97g66nD2SQ3LWaff2q86WSFmvOisHLSgz2CI0w1pJBDkSpVirqHnfsf22-RjMB2aJq3vayLTmifkM6VEdHGhTra0kdOzH58AzLNMOb4QSLTYtcxAwVrOMfhI-3-xp1rLYd8a1F-HVXNeZZdGLSb5pxComYhTI4uFpdgxd9eyH5A0KOMUYK39DSUECZiRlKTCTLDuJZRpmxhiiiXdQmOVwIAVZ9nzN9bdMWzftgSr5HVnMvtObBJXroEGgDCZJOQKCcEzk8psXjEobx19AlJXbf3L7Hwb-9HxL2z-2dzoH1_Lu_KS5TK78WQ7DsPXXBgFTBy4-iOzc3LNBjB0znkwMjuivjQie8GT596-vmbXrMAUXFvH2dSpfuwNCDSIRUSBAzjiiDCVuoJiJ7vAldaeapXn-tjMamb760h4HD6aey55YVvLNbwbmYWhoerpUvZB42cKOrFknlZlRVMkV0mDZOH2yLCsG5cikJEVUUhCGlLslPjKp-j4p3TP83vCvquiLQQbLTfMKyRGkJPb6X-O7_uMeaIPbzgmGZ6c3m1N6TZqdyvON1uoG-q5me2PNVVhlZEqyUr00HtI8Ua5ECjJKMKps4JrrmVHM89cNEJNEqsiiMFHZyeeqJ3YRbAAqBA1iRghiK0Dz8AvXgJxLQKhgyk-ltJygIzECSFGGdeWyIVR8LSlRaozJc2PLMFexrXgLhu_w4tJK_qJrBYr7UdmLUGX7UbnvIThw-g288348_35V9rHiFiFlM7ByPwSGsXDvNZNBhrtHutWbHbLN5vxieNur_7xsf7a1RlRSKgLgIk4WpghCJgWpYCbiWHM9oxpJCIpJHrZSYKqMvCyudNnrYJVPocEGo5wok4OI-oRJiGFJOQjcgBQi5Z9iNUQMZIZPJZXIEikkQ1ICicHzdJtQwS0hWKKPTlGAhpo9qAy2QJyr5xFshQzFIfGcuub2XXBwCVoHD2Kq87M3ZSgQZBhwrnqXWM0aKz6G7NX30oU1AR6iiQQFfK29ApdINdVCAEYUSowk8xsizc9nUVLxQlqfcuU8sOJLRtlwVV1KU2l9VJKWYsaKaClXDjRVnH7oNor3Sa5ie2xaxoZm6xtHY98cBTeohAJzmb-KxRHhDApSfBNk9laBT7bJA5eEe-YSPHuWuYCcKXus4hJRgcy_UjSuRI0xBJRQgBUkTZ-alxO903owm1cnP6_7982O11xdVpW0cyYRjn7DFRYfMvcclSurIlG9Tl5tQJINFBGfRChlru9OuPLdCVvBcGTTUvks1d8xHEQUSuxDKQSSwbx_5H6w9wnlqVF3FvoYiuWO4VRLLkG-dygog5SssGienTyu-n4imPIORTnQZ-X5M8WSqwgEV0IsMUAw2NYPpXJXcXy59j-hIg0BAIGUY8lV8E1QnnLdD-9up_vwYtS51u3D6Tk9Obw-fIt6qr6EVPaYCYKCRLoorp7ZOypLDkpRoj56tUGi-meRTgTzN-7DIDtN0ApmJJuVyu98Fel8bQNKSdWjM_U1AoiVk77FsoiUIhhYclL6f4a8vHz4PindfTB6E78yupm7pkkJFojHg7DXgM_ey_nZ9uEi8veEUzwTTgSopIxIzD4-eavUEGJAMOFCffnF8yAzVya3WX_-eDZAe83NkXt61d--OWuO3iKTOHUUV8nsTeHlqiRaNcZMNRCfRSdRrtVAACDMCcTFdTIblsq72-zvJGOj7P-LMSajSpspJOQjt-u_Txi_b5ejiV8WI6tp43Hb13xjaWxqU9OYbWX9P1h4LO6uZtLUF08TOr5_vvz5PwWZbjk=' },
//     graphviz: { name: 'GraphViz', example: 'eNp9kM0KgzAQhO8-xZIHaKlX6Ulp6S-FPoDEuGhqbML6cyl594JVGyv1OMPMt8ukMiNucojg5QFUTfKRQjVVjRSbzgZQPEEFW2An0oVkQWfO0mLTx53CHalF6hsAO6kwQV4PesbIRPylOJxIiwJp_YMDOPKWD8ouQP0F6AWp5DJ1qOyqU1w9Kte6NcZgjZPrLMxJl8imH9g_8_jzecLzYSzvteLPLBgR1rNvJ7Rwmw==' },
//     mermaid: { name: 'Mermaid', example: 'eNpNzr0OgjAcBPCdp7hRB-QNNHz4Masb6VBK0zZg_6S2GhTf3cJgnH93l1OODxrXKgHyGrkdyUowpOl2KrmFlv2ACcUKR4InKON1aDaCbtkYXsFLobPOUWewjgvF3EP5xomec1qQ9c40MbbDJ3q5eFXjLAdy3liFJqg72M_2NS6au1lMK_k_HeK99kGCLz2WfAHnUzg5' },
//     nomnoml: { name: 'Nomnoml', example: 'eNpdjzELgzAQhff8ioxaSOlWsJKlU4dC95Dh1Kgp0cjlQhH88VWs1BZueLz73j1OPSwCmcmM5upjTxm_9TQh2CpJL4N1DhqTpBPjXBUGsNJCqAEQPemdl0lV--h45yO1mmnGVA5FIISS5B0QYmVQ59kcXvs024Tgp-PxrDobytaael48vXNjb0LQQn7xHxdj928F2zfz7A5LfljAiSCQXbD1t_CyTZLuuV12U_mn5A2ROWWs' },
//     pikchr: { name: 'Pikchr', example: 'eNq1VLFu2zAQ3fkVB8UB2rRWZTlqIgMdHCBDAKMo0iDw4IW2aIkNTQokbbl_3yMpOXLtABnaQSB4d3z33jtSAw3fIIlTLongkmla-P1NdjXQPtLwEEkzQi7gp6XaApUFMPyWQq1eDLkgS7WHiAm2YdJGsFSigDW3_jwUqpGQJZew1moDghqLBfvYNKRQFlzD1GVXSiiNiHT1QubJxBfGDD7BhyQef04-Eqq1anog7rRVME_IRu0YaF5WFsZxjkocHcc7uwSMpbisuRAdeN6CNzA8Bz7PHeyBZ0Oc7qeKwYZyCXorGNiKWigVM2Cspr6xrbTallWAMN4lRFlzyU3VGaSWv9jKDgvmwpYrGQG3VPCVMwsQcjT6MvoKDf0NS2YbxiSq82bP85ahE5wfsU3-ZhvIzqZ397OJp4vtw4Fg0UC_nqywhZ_PCOeLEw-Rro6oHRUQBSxc3UgDEg6sTS6iySLqp9IEc15urcyJylAULkZos5WWC2A77NtwWzn7cSwDjVOBBYHAaFufq_OpE0e8F45czA5KrpI4OyD57W0_dxsIdbnrrJ-8znqudPY-Tx8fpneze3wa77U4jd92-ADXd_KmM5Iaw0vp3tZQ1fhErdKnnr6Ws319nP_nbrcm_Hh8-P70bv3j8FM5a8AiqjWX9ugmtZfIxYdUl-a_SvoDVDiU0w==' },
//     plantuml: { name: 'PlantUML', example: 'eNplj0FvwjAMhe_5FVZP40CgaNMuUGkcdttp3Kc0NSVq4lRxGNKm_fe1HULuuD37-bOfuXPUm2QChEjRnlIMCDmdUfHNSYY6xh42a9Fsegflk-yYlOLlcHK2I2SGtX4WZm9sZ1o8uOzxxbuWAlIGj8cshs6M1jDuY2owyU2P8jAezdnn10j53X0hlBsZFW021Pq7HaVSNw-KN-OogG8F8BAGqT8dXhZjxW4cyJEW6kcC-yHWFagHqW0MfaThhYmaVyE26P_x27qaDmXeruqqAMMw1h-ZlRI4aF3dX7hOwm5XzfIKDctlNcshPT1tFa8JPYAj-Zf5F065sqM=' },
//     svgbob: { name: 'Svgbob', example: 'eNqFT0kOgEAIu_sKbs4kwtxNxo-o4SN9vBWjxiXaA0taCojcYdolkdypNezcnWFn0inLwY_kZ1SI6pDuTnlLfoADpe-LwBFMezE0bWmjw-hm5muQuXmcxyFLIX7hdkzn5kgfUvpxZ9wDQa340gaw2lLL6lfLd7eHHQswfT6D' },
//     vega: { name: 'Vega', example: 'eNqVVcmSmzAQvfsrKCVHgrE9VGZc5UP23PIBKR8ENKAZgSgQjikX_x5JLELYcpzLMDTv9fq6fVk5DnpfRxnkGO0dlHFe1vv1-gQp9lLCsyb0CFv3AGVdnwLvtWYFciX1D4l5JohPvq_eMyBpxoVhOxhKHMekSIUlcFfSEGMuI_0W_zvORf0V1gLnIONzHFJQrpX5hGkD9QRXFBRhDimrWon_hFwH4Zw1hQr63LkW4GcDGARW4BcD-LSzAr8awJeNFfjNAD7bgd_NHO2hfxjAzYsV-NMM_bEbcEf1lG_Hfio1SQtM6zuDYYxyUi5GI75cpuBIiMKcFJyg4NIpqiDie5FHDewElcyqKYUSlGvxbHJk1HCT2HDBmxMvHbIXFGEKd-o5K4Auh7elsoe4iLU1ZjkmsqrLqNtRoQ5KCNBYWqaG605UuEiVu34_JrveBt_zAw0XA5KueNVAX4h7O-t2kfVD-Q3z19kVJIIh2nXGwwYv-4nP826KWVcElKhQyDhnuYzYJ6ebO5Uxh1NIuAFuR7AOluPq7cbsxhlJTegeJJWIrjswNEBXC0XEYqXUSWDCxoUK5yZhPCsvyyLuT1oRxyN4k6wEJZbUpLQmvL2OtZxaT9vaeOM6-t2En1H10hgVJ4RS5XBko5oD0FC-3PaTqfX9p5sK4rmD1fy51PY4VQ7n2VQfnhqm4nSZ0aMeaLYuxDVQUoAJHcRrQq_rebfb7dD_dNaqpf7Qzi6qN4lKi8X3ggflcu1u0I34xpKkBrlzH7amN9Vp5dDGvu7HrxJHhLfGge9vNYeaT2fcORwOzvRbMZelu6CNXzbd7MPRphl5G1bd6i80GTZv' },
//     vegalite: { name: 'Vega-Lite', example: 'eNrtVktz2yAQvvtXMEyOqt9pnNz6To-d6c3jA5ZWEg0CF7Ba26P_3gVb2JJSN8mhTWdyMIb92CffCnY9QuiFiXMoGL0hNLd2ZW4GgxIy1s-4zdfLPleD_QYvfSW4hUE57X8zStLI6SdgYs1XlqMAbdwqzbdKWibEhsRKxsyCxF9C4pxpa4jNmSUmVz9IwtMUNEhL7GYFhqgURWgMLN9ymRETMwGmf3DDrItxh3NclUysweB67teE7KjP4A2NCF3ibDyroib0toYuL9vQuxqaTtrQ-xq6HrWhDzU060Afg6-OwU81NLpuQ7fB4FUb-hwMjiuPLHD0m2i-L3Koxe6gSQum75xuzHUsgNYWKchYJVjfUE0v3TSWKEg5iMTpL4Oql7uzcmKpCi6ZaIJGaReJXAvRkLOf3LQcOFM8vnPilAkDURNLVMG4_A1ouRVw8HOCVGFeHRWo4Vt4bHLf10yiE2Z5Ca0MHSnvSaWhiA7_GFashNJ_P65WJbegFeJWr-E04oZpARnI5L7j258C_XI-6d7p_8H0C0v_PUtFhw2aycxtmM-GERm9xmE8xWEyxmE6HC6eJam7afgLy-8oWIZX26OZnSpd-E8qTWh0lvTihfT_C-ltrgHfHaJzpCGf-QR5fjVcnOuK8XDfEM-tF56c3bFZSq45PsDo0y-CryGIhzQFjj4YikpKlMfkOrmGWlIuE1hhEPhqPLbNgUYNMLioelXvF-H7eDo=' },
//     wavedrom: { name: 'WaveDrom', example: 'eNqrVijOTM9LzLFSiOZSUKhWyEvMTbVSUErOyVbSUYCB8sQykGCBHgjUALGSQq0OsnKXxJJEhHqo8go9YxPTihpbvQqgVApQBdAOpYzUxBQgVykpP6USRJckZuaAaJC8UiyasUGphaWpxSVQk6HGGugZ6ukZ1BjqGcBcgarJMTk7L788JzUlPRWoEarJEOJ0A0OQ07liawGPW0Gr' },
// };


export default krokiInfo;