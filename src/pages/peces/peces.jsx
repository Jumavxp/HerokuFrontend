import CardPeces from "../../components/cardPeces";
import disco from "../../assets/peces/pez disco.jpg"
import escalar from "../../assets/peces/pez-ángel-ficha.jpg"
import arcoiris from "../../assets/peces/pez-arcoíris-del-yamary-ficha.jpg"
import labeo from "../../assets/peces/ficha-labeo-bicolor.jpg"
import ramirezi from "../../assets/peces/pez-ramirezi-Microgeophagus-Ramirezi-ficha.jpg"
import kribensis from "../../assets/peces/ficha-kribensis.jpg"
import betta from "../../assets/peces/pez-betta.jpg"
import corydora from "../../assets/peces/corydoras.jpg"
import guppy from "../../assets/peces/peces-guppy.jpg"
import hacha from "../../assets/peces/ficha-pez-hacha.jpg"
import gobio from "../../assets/peces/Sthiphodon-ornatus-gobio-arcoíris-ficha.jpg"
import ancistrus from "../../assets/peces/ancistrus-starlight.jpg"
import otocinclus from "../../assets/peces/otocinclus-acuario.jpg"
import avispa from "../../assets/peces/ficha-pez-avispa.jpg"
import arlequin from "../../assets/peces/pez-arlequínTrigonostigma-Heteromorpha-ficha.jpg"
import oscar from "../../assets/peces/pez-oscar-ficha.jpg"
import florcuerno from "../../assets/peces/Flower-Horn-ficha.jpg"
import monja from "../../assets/peces/ficha-del-pez-monja-o-pez-monjita.jpg"
import borracho from "../../assets/peces/pez-borrachito-Hemigrammus-rhodostomus-ficha.jpg"
import zoro from "../../assets/peces/pez-zorro-volador-ficha.jpg"



const Peces = () => {
    return(
        <div className="container-fluid peces">
            <h1 className="titulo-peces"> Peces Tropicales</h1>
            <div className="row row-cols-5 justify-content-evenly md-flex">
                <div className="col">
                <CardPeces imagen={disco} nombre='Pez Disco' size='200 Litros' temp='Entre 25°C y 30°C' ph='De 5.5 a 6.5' diet='Omnívoros' long='15 a 30 Cm'/>
                </div>
                <div className="col">
                <CardPeces imagen={escalar} nombre='Pez Ángel (Pez Escalar)' size='100 Litros' temp='Entre 24°C y 30°C' ph='De 6 a 7.4' diet='Omnívoros' long='15cm, 20cm de alto'/>
                </div>
                <div className="col">
                <CardPeces imagen={arcoiris} nombre='Pez arcoíris del Yamary' size='200 Litros' temp='Entre 24°C y 26°C' ph='De 7 a 8' diet='Omnívoros' long='10 Cm'/>
                </div>
                <div className="col">
                <CardPeces imagen={labeo} nombre='Labeo Bicolor' size='150 Litros' temp='Entre 22°C y 26°C' ph='De 6.5 a 7.5' diet='Omnívoros' long='12 a 15 Cm'/>
                </div>
                <div className="col">
                <CardPeces imagen={ramirezi} nombre='Ramirezi' size='40 Litros por pareja' temp='Entre 26°C y 30°C' ph='De 4 a 7' diet='Omnívoros' long='7 Cm'/>
                </div>
                <div className="col">
                <CardPeces imagen={kribensis} nombre='Kribensis' size='50 a 100 Litros' temp='Entre 24°C y 28°C' ph='De 6 a 7.5' diet='Omnívoros' long='6 a 10 Cm'/>
                </div>
                <div className="col">
                <CardPeces imagen={betta} nombre='Pez Betta' size='50 Litros' temp='Entre 22°C y 30°C' ph='De 6 a 8' diet='Omnívoros' long='4.5 a 10 Cm'/>
                </div>
                <div className="col">
                <CardPeces imagen={corydora} nombre='Corydoras' size='60 a 80 Litros' temp='Entre 22°C y 27°C' ph='De 6 a 7' diet='Omnívoros y detritívoros' long='3 a 6 Cm'/>
                </div>
                <div className="col">
                <CardPeces imagen={guppy} nombre='Pez Guppy' size='80 Litros' temp='Entre 22°C y 28°C' ph='De 7 a 8.5' diet='Omnívoros' long='3 a 4 Cm'/>
                </div>
                <div className="col">
                <CardPeces imagen={hacha} nombre='Pez Hacha' size='50 a 70 Litros' temp=' 25°C' ph='De 5.5 a 6.5' diet='Carnívoro' long='4 Cm'/>
                </div>
                <div className="col">
                <CardPeces imagen={gobio} nombre='Gobio Arcoíris' size='80 Litros' temp='Entre 20°C y 28°C' ph='De 6.5 a 7.5' diet='Herbívoro' long='7 Cm'/>
                </div>
                <div className="col">
                <CardPeces imagen={ancistrus} nombre='Ancistrus' size='150 Litros' temp='Entre 23°C y 27°C' ph='De 5.8 a 7.8' diet='Omnívoros' long='15 Cm'/>
                </div>
                <div className="col">
                <CardPeces imagen={otocinclus} nombre='Otocinclus' size='60 Litros' temp='Entre 21°C y 26°C' ph='De 5.5 a 7.5' diet='Principalmente vegetariano' long='4 a 5 Cm'/>
                </div>
                <div className="col">
                <CardPeces imagen={avispa} nombre='Pez Avispa' size='80 Litros' temp='Entre 25°C y 30°C' ph='De 7.5 a 8.5' diet='Carnívoro' long='5 Cm'/>
                </div>
                <div className="col">
                <CardPeces imagen={arlequin} nombre='Pez Arlequín' size='100 Litros' temp='Entre 21°C y 28°C' ph='De 5 a 7.5' diet='Omnívoros' long='4.5 Cm'/>
                </div>
                <div className="col">
                <CardPeces imagen={oscar} nombre='Pez Óscar' size='200 a 300 Litros' temp='Entre 20°C y 28°C' ph='De 6 a 7.5' diet='Omnívoros' long='35 Cm'/>
                </div>
                <div className="col">
                <CardPeces imagen={florcuerno} nombre='Flower Horn' size='minimo 100 Litros' temp='Entre 24°C y 30°C' ph='De 6.5 a 7.8' diet='Omnívoros' long='15 a 30 Cm'/>
                </div>
                <div className="col">
                <CardPeces imagen={monja} nombre='Pez Monja o Pez Monjita' size='40 a 80 Litros' temp='Entre 20°C y 26°C' ph='Neutro, 7' diet='Omnívoros' long='Hasta 7 Cm'/>
                </div>
                <div className="col">
                <CardPeces imagen={borracho} nombre='Pez Borrachito' size='70 Litros' temp='Entre 24°C y 27°C' ph='De 5.5 a 7' diet='Omnívoros' long='5 Cm'/>
                </div>
                <div className="col">
                <CardPeces imagen={zoro} nombre='Pez Zorro Volador' size='200 Litros' temp='Entre 20°C y 26°C' ph='De 5.5 a 6.5' diet='Omnívoros' long='15 Cm'/>
                </div>
                
                
            </div>
        </div>
    )
}

export default Peces;