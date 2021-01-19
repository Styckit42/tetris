import { savePieceAction, savePieceAfterChangeAction, saveStackAction,
saveGameStateAction, saveScoreAction, saveLevelsAction, saveLinesErasedAction,
saveNextPieceAction, saveHasToFallAction, resetStateAction, saveSpeedAction,
saveVolumeAction, saveIsAdminAction, saveOpponentListAction,
saveOpponentListAfterRemoveAction, saveLinesBeingErasedAction, savePlayerIdAction,
savePlayerNameAction, saveShadowPieceAction} from "../../actions/save";

it('testSave', () => {
  savePieceAction(null);
  savePieceAfterChangeAction(null);
  saveStackAction(null);
  saveGameStateAction(null);
  saveScoreAction(null);
  saveLevelsAction(null);
  saveLinesErasedAction(null);
  saveNextPieceAction(null);
  saveHasToFallAction(null);
  resetStateAction(null);
  saveSpeedAction(null);
  saveVolumeAction(null);
  saveIsAdminAction(null);
  saveOpponentListAction(null);
  saveOpponentListAfterRemoveAction(null);
  saveLinesBeingErasedAction(null);
  savePlayerIdAction(null);
  savePlayerNameAction(null);
  saveShadowPieceAction(null);
});
