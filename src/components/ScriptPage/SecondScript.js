import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./Scripts.scss";
function SecondScript() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div>
			<h2>
				PROPAGANDA : Okul da yapılacak olan başkanlık seçimiyle ilçe başkan
				seçiminin propagandası karışırsa ne olur?
			</h2>
			<p>
				Kerim lise üçe giden bir öğrencidir okulun o sene düzenlenecek olan okul
				başkanı seçimine katılmaya karar verir Kerim’in babası da ilçe başkanı
				olmak için adaylığını koymaya hazırlanır Kerim seçim için çok
				heyecanlıdır ve sürekli araştırır insanların kendisini seçmesi için
				nasıl bir propaganda hazırlanması için stratejiler düşünür ve
				araştırmaya başlar
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
					<Modal.Title>PROPAGANDA</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					Kerim lise üçe giden bir öğrencidir okulun o sene düzenlenecek olan
					okul başkanı seçimine katılmaya karar verir Kerim’in babası da ilçe
					başkanı olmak için adaylığını koymaya hazırlanır Kerim seçim için çok
					heyecanlıdır ve sürekli araştırır insanların kendisini seçmesi için
					nasıl bir propaganda hazırlanması için stratejiler düşünür ve
					araştırmaya başlar araştırdıkça öğrendiği şeyler onu çok etkiler
					insanları kitlesel şekilde bir araya getiren insanları gördükçe çok
					etkilenir ve kendini o tarihi sahnelerde hayal eder ve bir gün marx
					olur bir gün goebbels olur araştırdıkça bir şeyi fark eder bu
					insanların birisi sürekli “yeterince büyük bir yalan söyler ve onu
					tekrar etmeye devam ederseniz , insanlar sonunda ona inanmaya
					başlayacaklardır” Goebbels’in büyük yalan tekniğinden etkilenen Kerim
					öğrendiği bilgilerle bir çıkarım yapar yani yapması gereken şey
					insanları aynı düşüncenin etrafında toplamak farklı eğitimler de olan
					farklı çevrede yaşayan insanları bir düşüncenin etrafında toplamak
					yaptığı propagandanın yalan dahi olsa önemli olanın ikna ve iletişim
					olduğunu fark eder ve kendi propagandasını oluşturur. “Yarını
					değiştiren bu gün kimi seçtiğinle doğru orantılıdır” Kerim hazırladığı
					propagandaya haftalarca çalışıp kendi sahnesine çıkmaya hazırdır
					Kerimle babasının seçim konuşmaları aynı gündür ve Kerim hazırladığı
					belgeleri dosyaya koyar ama babasının seçim dosyaları aynıdır ve sabah
					evden çıkarken kendi dosyasın yerine babasının dosyasını alır babası
					da kendi dosyası sanıp Kerimin dosyasını alır.
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Kapat
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

export default SecondScript;
