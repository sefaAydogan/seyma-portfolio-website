import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Scripts.scss";
function FirstScript() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div>
			<h2>ÇORABIM DELİK (SİNOPSİS)</h2>
			<p>
				Bir köyde iki farklı grup insan yaşar bu iki gruptan biri alevi diğer
				grup ise sünndir.Bu insanlar birlikte yaşayamayan hassas oldukları
				konulara saygı göstermeyen ve birbirlerine zarar verirler.
			</p>
			<Button variant="primary" onClick={handleShow}>
				Daha fazla oku...
			</Button>
			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>ÇORABIM DELİK</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Bir köyde iki farklı grup insan yaşar bu iki gruptan biri alevi diğer
					grup ise sünndir.Bu insanlar birlikte yaşayamayan hassas oldukları
					konulara saygı göstermeyen ve birbirlerine zarar verirler. Bu köyde
					bir de deli yaşar bu delinin sünni mi alevi mi olduğu bilinmez nereden
					geldiği kimin nesi olduğu bilinmezmiş. Deli insanlar tarafından
					dışlanır akli dengesi yerinde olmadığın için kaçarlarmış. Çocukların
					etrafın da dolanmasına izin vermezlermiş deli bu duruma çok üzülürmüş.
					Çünkü insanlar sürekli ona kızıyorlarmış. Alevi ve Sünnilerin ortak
					sevmediği kişiymiş. Deli bu duruma çok üzülüyormuş ve bir gün yolda
					yürürken çocukların sokakta oyun oynadığını görmüş ve korkarak
					yanlarına gitmiş. Çocuklar onun geldiğini görünce ona doğru korkarak
					bakmışlar. Çocuklar ona bakarken çocuklardan bir tanesi deliye bakıp
					gülmeye başlamış diğer çocuklar o çocuğa dönüp şaşkınlıkla bakmışlar
					çocuk eliyle delinin çorabını göstermiş çocukların hepsi delinin
					çorabının delik olduğunu görmüşler ve onlarda gülmeye başlamışlar.
					Deli olanlar karşısın da şaşırmış ve ona güldükleri için utanmış.
					Çorabının delik olan yerini parmaklarıyla gizlemeye çalışmış. Ama
					birden durup çocuklara bakmış çevresindekiler ona gülüyormuş . Bunu
					fark edince saklamaya çalışmamış. Deli o kadar mutlu olmuş ki onlarla
					birlikte gülmeye başlamış. O günden sonra insanalar deliye daha iyi
					davranmaya başlamışlar. Onu artık dışlamıyorlarmış bu iki grup insan
					delinin çevrelerinde olmalarından rahatsız olmuyorlarmış. Deli o
					günden sonra çorabını delik giyer sağlam çoraplarını delip öyle
					giyermiş. Hatta kışın bile delik çoraplarını göstermek için terlik
					giyermiş. Bir gün deli sabah olup dışarıya çıkmış etrafta bir gariplik
					varmış. Çünkü dışarı da insanlar yokmuş. Sokağı dolaşmaya başlamış.
					Alevilerin yaşadığı bölgede bir hareketlilik görmüş. İnsanlar bir
					kuyunun etrafına toplanmış oraya bakıyorlarmış ve hiç biri
					konuşmuyormuş ve deli hızlıca yanlarına gitmiş insanların baktığı yere
					bakmış kuyunun içinde etrafında hatta kuyudan su çekmek için
					kullanılan çıkrık da bile tavşan parçaları varmış deli bu görüntü den
					çok korkmuş herkes korku ve öfkeyle bakıyormuş deli ne olduğunu
					anlayamamış bu sessizliği bozan öfkeli bir ses “bunu kimin yaptığını
					biliyoruz” diye bağırmış. Su kuyularımızı kirleterek bizi evimizden
					toprağımız dan kovmaya çalışıyorlar. Aleviler inançları gereği tavşan
					eti yemezler ve uzak dururlar . Sünniler bunu bildikleri için alevi
					lerin kuyularına tavşan atmışlar. Artık insanlar sessiz değilmiş
					öfkeyle bağırıyorlarmış öfkeli kalabalık hep birlikte Sünnilerin
					yaşadıkları yere gitmeye başlamışalar. Herkes bağırıp çağırıyormuş
					Sünnilerin evlerinin önüne gelip bağırmaya başlamışlar insanlar
					evinden çıkıp öfkeli kalabalığa doğru gitmeye başlamışalar ve kavga
					etmeye başlamışlar. Deli korku dolu gözlerle iki gruba bakıyormuş ve o
					gün aleviler ve sünniler büyük kavga etmiş. O günden sonra etrafta
					belirgin bir değişiklik varmış. Çocuklar dışarıda oyun oynamıyor ve
					kimse kimseye gülmüyormuş. Deli bu olanları anlamıyormuş insanlar
					dışarıda oynar insanalar nasıl eskisi gibi bir birlerine güler
					çocuklar dışarda oyun oynarlar diye düşünüyormuş. Sonra aklına bir şey
					gelmiş insanların ilk başlarda ona nasıl kötü davrandıkları aklına
					gelmiş ama sonra çorabının delik olduğunu gördükten sonra ona
					güldükleri aklına gelmiş. Hemen koşarak eve gidip masanın üzerinde
					duran makası almış ve sokaklardaki çamaşır iplerindeki çorapları alıp
					makasla delmiş. Deli elinde makasla gülerek sokaklarda koşuyormuş. İşi
					bittiğinde olanları görmek için bir ağacın altına oturmuş ve beklemiş.
					İnsanalar çoraplarının delik olduğunu fark edince çok sinirlenmişler
					aleviler sünnilerin yaptıklarını düşünmüş sünniler ise alevilerin
					yaptığını düşünmüş. İnsanlar çoraplarını alıp hesap sormak için bir
					birlerinin yaşadıkları yere doğru gitmeye başlamışlar iki öfkeli gruo
					yolda bir birleriyle karşılaşmışlar ve kavga etmeye başlamışlar iki
					grupta bir birini suçluyormuş sonra bir kişi bağırmış “Bir susun
					artık!” insanlar o sese kulak verip susmuşlar köyün yaşlısı
					“görmüyormuşuz hepimizin çorapları delinmiş bunu yapan her iki tarafa
					da yapmış”. Deli korkarak öfkeli kalabalığa doğru gitmeye başlamış
					deli ben yaptım demiş öfkeli insanlar sesin geldiği yöne dönmüş deliyi
					gören kalabalık çok şaşırmışlar . Yaşlı kadın bunu neden yaptın diye
					sormuş deli korkarak cevap vermeye çalışmış “gülün diye yaptım” demiş.
					İnsanlar buna neden gülelim gülenecek ne var diye bağırmışalar deli
					ama siz bana güldünüz bana eskiden iyi davranmıyordunuz beni hep
					dışlıyordunuz sonra bana ilk defa güldünüz o gün benim çorabım delikti
					ben utanmıştım ama siz ilk defa bana gülmüştünüz insanlar sen delisin
					diye bağırdılar. Deli ben insanların delik çoraba güldüklerini
					düşünmüştüm ve ben birbirlerine gülen insanların birbirlerinden nefret
					etmez diye düşünmüştüm herkesin çorabı delik olursa herkes güler diye
					düşünmüştüm
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default FirstScript;
