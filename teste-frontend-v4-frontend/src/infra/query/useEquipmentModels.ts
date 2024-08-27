import { useQuery, UseQueryResult } from '@tanstack/react-query'

import { IEquipmentModel } from '../../interfaces/equipmentModel.interface'

import { QUERY_KEYS } from '../../constants/queryKeys'

import EquipmentModels from '../../../../data/equipmentModel.json'

const getEquipmentModels = () => JSON.parse(JSON.stringify(EquipmentModels))

export const useEquipmentModels = (): UseQueryResult<IEquipmentModel[]> =>
  useQuery({
    queryKey: [QUERY_KEYS.EQUIPMENT_MODELS],
    queryFn: getEquipmentModels
  })
