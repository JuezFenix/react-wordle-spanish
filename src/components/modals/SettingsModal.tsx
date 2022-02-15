import { Alert } from '../alerts/Alert'
import { BaseModal } from './BaseModal'
import { SettingsToggle } from './SettingsToggle'
import { HARD_MODE_ALERT_MESSAGE } from '../../constants/strings'

type Props = {
  isOpen: boolean
  handleClose: () => void
  isHardMode: boolean
  handleHardMode: Function
  isDarkMode: boolean
  handleDarkMode: Function
  isHardModeErrorModalOpen: boolean
  isHighContrastMode: boolean
  handleHighContrastMode: Function
}

export const SettingsModal = ({
  isOpen,
  handleClose,
  isHardMode,
  handleHardMode,
  isDarkMode,
  handleDarkMode,
  isHardModeErrorModalOpen: isHardModeAlertModalOpen,
  isHighContrastMode,
  handleHighContrastMode,
}: Props) => {
  return (
    <BaseModal title="Ajustes" isOpen={isOpen} handleClose={handleClose}>
      <div className="grid-cols-2 gap-4">
        <SettingsToggle
          settingName="Modo difícil"
          flag={isHardMode}
          handleFlag={handleHardMode}
        />
        <SettingsToggle
          settingName="Modo oscuro"
          flag={isDarkMode}
          handleFlag={handleDarkMode}
        />
        <SettingsToggle
          settingName="Modo de alto contraste"
          flag={isHighContrastMode}
          handleFlag={handleHighContrastMode}
        />
        <Alert
          message={HARD_MODE_ALERT_MESSAGE}
          isOpen={isHardModeAlertModalOpen}
        />
      </div>
    </BaseModal>
  )
}
