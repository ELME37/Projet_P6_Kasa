import React, { useState, useEffect } from 'react';
import './lodging.scss';
import { useParams, useNavigate } from 'react-router-dom';
import Carrousel from '../../components/carrousel/Carrousel';
import Tag from '../../components/tag/Tag';
import Star from '../../components/star/Star';
import Collapse from '../../components/collapse/Collapse';

export default function Lodging () {
  
  const { id } = useParams()
  const errorPage = useNavigate();
  const [lodging, setLodging] = useState(null);
 
  useEffect(() => {
    
    fetch('/data_lodging/lodging.json')
      .then((response) => response.json())
      .then((data) => {

        const selectedLodging = data.find((lodging) => lodging.id === id);

        if (selectedLodging) {
          setLodging(selectedLodging);
      } else {
        errorPage('/error404');
      }
      })
      .catch(error => console.error(error))
  }, [ id, errorPage]);

  if (!lodging) {
    return null;
  }

  console.log(lodging.equipments)
    
    return (
        <div className='lodging'>

          <Carrousel images={lodging.pictures} />

          <div className='lodging__infos'>
            <div className="lodging__presentation">
              <div className="lodging__infos--title">
                  <h2 className='lodging__title'>{lodging.title}</h2>
                  <p className='lodging__location'>{lodging.location}</p>
              </div>
              <div className="tags">
                {lodging.tags.map((tag, id) => (
                  <Tag content={tag} key={id} />
                ))}
              </div>
            </div>

            <div className='lodging__infos--owner'>
                <div className="owner">
                    <div className="owner__name">
                      {lodging.host.name.split(' ').map((nameSplit, id) => (
                        <p className='name' key={id}>{nameSplit}</p>
                      ))}
                    </div>
                    <div className="owner__image">
                        <img src={lodging.host.picture} alt="propriétaire du logement" />
                    </div>
                </div>
                <div className="stars">
                  {[...Array(5)].map((star, id) => {
                    return <Star key={id} active={id < lodging.rating} />
                  })}
                </div>
            </div>
          </div>
          <div className="collapses__lodging">
              <Collapse styles="collapse__lodging"
                title="Description" 
                children={lodging.description}
              />
              <Collapse styles="collapse__lodging" title="Équipements" >
                {lodging.equipments.map((equipment, id) => (
                <p className='collapse__item' key={id}>{equipment}</p>
              ))}          
              </Collapse>
          </div>
        </div>
        
    );
};
