import { Icon, Point } from 'leaflet'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { IFullEquipment } from '../interfaces/fullEquipment.interface'

import iconMaintaining from '../assets/iconMaintaining.svg'
import iconWorking from '../assets/iconWorking.svg'
import iconStopped from '../assets/iconStopped.svg'
import { EQUIPMENT_STATUS } from '../constants/states'
import { TState } from '../interfaces/equipmentStateHistory.interface'

export type TMarker = { lat: number; lng: number }

interface IMapProps {
  equipment: IFullEquipment
  positions: TState[]
}

const EquipmentMap = ({ equipment, positions }: IMapProps) => {
  const MaintainingIcon = new Icon({
    iconUrl: iconMaintaining,
    iconSize: new Point(24, 24)
  })
  const WorkingIcon = new Icon({
    iconUrl: iconWorking,
    iconSize: new Point(24, 24)
  })
  const StoppedIcon = new Icon({
    iconUrl: iconStopped,
    iconSize: new Point(24, 24)
  })

  return (
    <MapContainer center={equipment.position} zoom={11} className="h-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {states.map(({ date, equipmentStateId }) => (
        <div id={`marker_${id}`}>
          <Marker
            position={position}
            icon={
              state.id === EQUIPMENT_STATUS.MAINTAINING
                ? MaintainingIcon
                : state.id === EQUIPMENT_STATUS.WORKING
                ? WorkingIcon
                : StoppedIcon
            }
          >
            <Popup>
              <div className="flex flex-col font-normal text-gray-700">
                <header className="flex flex-row justify-between items-center">
                  <span className="text-lg font-bold">{name}</span>
                  <span className="font-bold" style={{ color: state.color }}>
                    {state.name}
                  </span>
                </header>
                <span className="text-xs text-gray-400">
                  ID: {equipmentStateId}
                </span>

                <footer className="flex justify-end">
                  <span className="underline cursor-pointer">ver mais</span>
                </footer>
              </div>
            </Popup>
          </Marker>
        </div>
      ))}
    </MapContainer>
  )
}

export default EquipmentMap