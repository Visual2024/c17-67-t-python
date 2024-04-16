/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useContadorTiempo } from '../../Hook/useContadorTiempo';
import fetchRandomFaceImage from '../../services/api/unsplash/unplash'

export function HeaderCard({ nombreUsuario }) {
  const [imageUrl, setImageUrl] = useState(null);
  const { tiempoFormateado, iniciarContador, pausarContador, reanudarContador, detenerContador, inicio, pausa } = useContadorTiempo();

  const obtenerNombreUsuario = (correo) => {
    if (correo) {
      const arrobaIndex = correo.indexOf('@');
      if (arrobaIndex !== -1) {
        return correo.slice(0, arrobaIndex);
      }
      return correo;
    }
    return '';
  };
  useEffect(() => {
    const getImage = async () => {
      const url = await fetchRandomFaceImage();
      setImageUrl(url);
    };
    getImage();
  }, []);

  return (
    <article className="object-contain flex gap-7 shadow-md p-2 rounded-lg text-xl text-gray-500 font-medium">
      <div className="flex gap-3">
        <p>{tiempoFormateado}</p>
        {inicio ? (
          <>
            {!pausa ? (
              <button className="bg-yellow-500 text-white px-5 rounded-xl" onClick={pausarContador}>
                Pausa
              </button>
            ) : (
              <button className="bg-blue-500 text-white px-5 rounded-xl" onClick={reanudarContador}>
                Reanudar
              </button>
            )}
            <button className="bg-red-500 text-white px-5 rounded-xl" onClick={detenerContador}>
              Detener
            </button>
          </>
        ) : (
          <button className="bg-green-500 text-white px-5 flex items-center rounded-xl" onClick={iniciarContador}>
            Inicio
          </button>
        )}
      </div>
      <div className='flex items-center gap-1'>
        <img className=' h-7 rounded-full' src={imageUrl} alt="Face" />
      <h2>{obtenerNombreUsuario(nombreUsuario)}</h2>
      </div>
    </article>
  );
}
