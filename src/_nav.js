import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilLibraryBuilding,
  cilUser,
  cilCircle,
  cibWireguard,
  cilBlind
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },

  {
    component: CNavTitle,
    name: 'Details',
  },
  {
    component: CNavItem,
    name: 'Offices',
    to: '/details/offices',
    icon: <CIcon icon={cilLibraryBuilding} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Staff',
    to: '/details/staff',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Centers',
    to: '/details/centers',
    icon: <CIcon icon={cibWireguard} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Members',
    to: '/details/members',
    icon: <CIcon icon={cilBlind} customClassName="nav-icon" />,
  },
]

export default _nav
