import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  Save, 
  Download, 
  Copy, 
  RotateCcw, 
  Plus, 
  Trash2, 
  Upload, 
  CheckCircle2, 
  AlertCircle,
  FileCode,
  FileText
} from 'lucide-react';
import { BiDailyReport, PipelineStage, ProgressPhoto } from '../types/project';
import { compressImageFile } from '../utils/storageAndExport';

interface AdminPanelModalProps {
  isOpen: boolean;
  onClose: () => void;
  reports: BiDailyReport[];
  selectedReportId: string;
  onSelectReport: (id: string) => void;
  onSaveReport: (updatedReport: BiDailyReport) => void;
  onExportJson: () => void;
  onResetDefault: () => void;
  onDownloadPdf: () => void;
  onCopyWhatsApp: () => void;
  isDownloadingPdf: boolean;
}

const DEFAULT_PIN = '2026';

export const AdminPanelModal: React.FC<AdminPanelModalProps> = ({
  isOpen,
  onClose,
  reports,
  selectedReportId,
  onSelectReport,
  onSaveReport,
  onExportJson,
  onResetDefault,
  onDownloadPdf,
  onCopyWhatsApp,
  isDownloadingPdf,
}) => {
  const [pinInput, setPinInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinError, setPinError] = useState(false);

  // Current editing state
  const currentReport = reports.find((r) => r.id === selectedReportId) || reports[2];
  const [formData, setFormData] = useState<BiDailyReport>({ ...currentReport });

  // Update form data when selectedReportId changes
  React.useEffect(() => {
    const r = reports.find((item) => item.id === selectedReportId);
    if (r) {
      setFormData({ ...r, photos: [...r.photos.map((p) => ({ ...p }))], nextSteps: [...r.nextSteps] });
    }
  }, [selectedReportId, reports]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === DEFAULT_PIN) {
      setIsAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const handleFieldChange = (field: keyof BiDailyReport, val: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: val,
    }));
  };

  const handleCivilProgressChange = (civilVal: number) => {
    setFormData((prev) => {
      // Auto compute combined progress: 0.5016 * civil + 0.4984 * iot
      const combined = (0.5016 * civilVal) + (0.4984 * prev.iotProgress);
      return {
        ...prev,
        civilProgress: civilVal,
        cumulativeProgress: Number(combined.toFixed(1)),
      };
    });
  };

  const handleIotProgressChange = (iotVal: number) => {
    setFormData((prev) => {
      const combined = (0.5016 * prev.civilProgress) + (0.4984 * iotVal);
      return {
        ...prev,
        iotProgress: iotVal,
        cumulativeProgress: Number(combined.toFixed(1)),
      };
    });
  };

  // Photo handlers
  const handlePhotoChange = (idx: number, field: keyof ProgressPhoto, value: string) => {
    const newPhotos = [...formData.photos];
    newPhotos[idx] = { ...newPhotos[idx], [field]: value };
    setFormData((prev) => ({ ...prev, photos: newPhotos }));
  };

  const handleAddPhoto = () => {
    const newPhoto: ProgressPhoto = {
      id: `photo-${Date.now()}`,
      url: '/progress/2026-11-05/foto-1-atap.jpg',
      caption: 'Dokumentasi Tambahan',
      narrative: 'Uraian teknis aktivitas pekerjaan lapangan.',
    };
    setFormData((prev) => ({
      ...prev,
      photos: [...prev.photos, newPhoto],
    }));
  };

  const handleDeletePhoto = (idx: number) => {
    setFormData((prev) => ({
      ...prev,
      photos: prev.photos.filter((_, i) => i !== idx),
    }));
  };

  const handlePhotoUpload = async (idx: number, file: File) => {
    try {
      const base64 = await compressImageFile(file);
      handlePhotoChange(idx, 'url', base64);
    } catch (err) {
      console.error('Failed to compress image:', err);
    }
  };

  // Next steps handlers
  const handleStepChange = (idx: number, value: string) => {
    const newSteps = [...formData.nextSteps];
    newSteps[idx] = value;
    setFormData((prev) => ({ ...prev, nextSteps: newSteps }));
  };

  const handleAddStep = () => {
    setFormData((prev) => ({
      ...prev,
      nextSteps: [...prev.nextSteps, 'Rencana aktivitas teknis berikutnya...'],
    }));
  };

  const handleDeleteStep = (idx: number) => {
    setFormData((prev) => ({
      ...prev,
      nextSteps: prev.nextSteps.filter((_, i) => i !== idx),
    }));
  };

  const handleSave = () => {
    onSaveReport(formData);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div 
        className="relative bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl my-6 flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* =====================================================================
            HEADER
        ===================================================================== */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-pln-cyan text-slate-900 flex items-center justify-center font-bold">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-extrabold tracking-tight">
                Admin Portal Manajemen Progres
              </h3>
              <p className="text-[11px] text-slate-300">
                Pembaruan Laporan 2 Harian & Ekspor JSON untuk Vercel
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* =====================================================================
            PIN AUTHENTICATION SCREEN
        ===================================================================== */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 text-center max-w-sm mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-pln-blue flex items-center justify-center mx-auto">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900">Masukkan PIN Admin</h4>
              <p className="text-xs text-slate-500 mt-1">
                Akses khusus pelaksana BRAIN IPB University untuk memperbarui laporan
              </p>
            </div>
            <form onSubmit={handleLogin} className="space-y-3">
              <input
                type="password"
                maxLength={8}
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="Masukkan PIN (Default: 2026)"
                className="w-full text-center tracking-widest text-lg font-bold py-2.5 px-4 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-pln-blue"
                autoFocus
              />
              {pinError && (
                <div className="text-xs font-semibold text-rose-600 flex items-center justify-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>PIN tidak valid. Coba lagi (2026).</span>
                </div>
              )}
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-pln-blue text-white text-xs font-bold hover:bg-sky-600 transition"
              >
                Buka Panel Admin
              </button>
            </form>
          </div>
        ) : (
          /* =====================================================================
              AUTHENTICATED ADMIN EDITOR FORM
          ===================================================================== */
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Top Quick Actions Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="flex items-center gap-2">
                <label className="text-xs font-bold text-slate-700">Pilih Siklus:</label>
                <select
                  value={selectedReportId}
                  onChange={(e) => onSelectReport(e.target.value)}
                  className="px-3 py-1.5 rounded-xl border border-slate-300 text-xs font-bold bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-pln-blue"
                >
                  {reports.map((r) => (
                    <option key={r.id} value={r.id}>
                      Siklus #{r.cycleNumber} ({r.shortDate}) {r.isLatestActive ? '★ TERBARU' : ''}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={onCopyWhatsApp}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-xs active:scale-95"
                  title="Salin pesan laporan siap kirim WhatsApp untuk grup koordinasi PLN"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>Salin Teks WA</span>
                </button>
                <button
                  onClick={onDownloadPdf}
                  disabled={isDownloadingPdf}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-pln-blue text-white hover:bg-sky-600 text-xs font-bold transition shadow-xs disabled:opacity-50"
                  title="Download 1-page A4 PDF Resmi"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isDownloadingPdf ? 'Membuat PDF...' : 'Download PDF (1 Lembar)'}</span>
                </button>
                <button
                  onClick={onExportJson}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-xs font-bold border border-emerald-200 transition"
                  title="Unduh file progressReports.json untuk git commit"
                >
                  <FileCode className="w-3.5 h-3.5" />
                  <span>Export JSON</span>
                </button>
                <button
                  onClick={onResetDefault}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-slate-100 text-slate-500 hover:text-rose-600 text-xs font-medium transition"
                  title="Reset ke data bawaan"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Form Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Status Laporan</label>
                <select
                  value={formData.status}
                  onChange={(e) => handleFieldChange('status', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-pln-blue"
                >
                  <option value="ON-SCHEDULE">ON-SCHEDULE</option>
                  <option value="COMPLETED">COMPLETED</option>
                  <option value="AHEAD">AHEAD OF SCHEDULE</option>
                  <option value="DELAYED">DELAYED</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Lokasi Pengerjaan</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => handleFieldChange('location', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-pln-blue"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Tahap Pipeline</label>
                <select
                  value={formData.pipelineStage}
                  onChange={(e) => {
                    const st = e.target.value as PipelineStage;
                    let lbl = '1. Fabrikasi Modul Knock-Down (Depok)';
                    if (st === 'qc_packing') lbl = '2. QC & Packing Modul Modular';
                    if (st === 'ekspedisi') lbl = '3. Logistik Ekspedisi Darat/Laut';
                    if (st === 'erection_palembang') lbl = '4. Erection & Sipil Palembang';
                    if (st === 'iot_bast') lbl = '5. Integrasi IoT & BAST 28 Nov';
                    handleFieldChange('pipelineStage', st);
                    handleFieldChange('pipelineStageLabel', lbl);
                  }}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-pln-blue"
                >
                  <option value="workshop_depok">1. Fabrikasi Modul Depok</option>
                  <option value="qc_packing">2. QC & Packing</option>
                  <option value="ekspedisi">3. Logistik Ekspedisi</option>
                  <option value="erection_palembang">4. Erection Palembang</option>
                  <option value="iot_bast">5. Smart IoT & BAST</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Progres Sipil (%) (Bobot 50.16%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="100"
                  value={formData.civilProgress}
                  onChange={(e) => handleCivilProgressChange(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-pln-blue"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Progres IoT-Hidroponik (%) (Bobot 49.84%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  min="0"
                  max="100"
                  value={formData.iotProgress}
                  onChange={(e) => handleIotProgressChange(parseFloat(e.target.value) || 0)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-pln-blue"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Progres Kumulatif Total (%)
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="100"
                    value={formData.cumulativeProgress}
                    onChange={(e) => handleFieldChange('cumulativeProgress', parseFloat(e.target.value) || 0)}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-pln-blue"
                  />
                  <div className="w-24">
                    <input
                      type="number"
                      step="0.1"
                      value={formData.progressDelta}
                      onChange={(e) => handleFieldChange('progressDelta', parseFloat(e.target.value) || 0)}
                      placeholder="+Δ"
                      className="w-full px-2 py-2 rounded-xl border border-slate-300 text-xs text-emerald-600 font-bold"
                      title="Delta kenaikan progres"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Daily Weather & Manpower Settings */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-3.5 bg-slate-50/80 rounded-2xl border border-slate-200">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Cuaca Pagi (08:00 - 12:00)</label>
                <input
                  type="text"
                  value={formData.weather?.morning || ''}
                  onChange={(e) => handleFieldChange('weather', { morning: e.target.value, afternoon: formData.weather?.afternoon || 'Cerah' })}
                  placeholder="Cerah / Berawan"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-pln-blue"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Cuaca Siang/Sore (13:30 - 17:00)</label>
                <input
                  type="text"
                  value={formData.weather?.afternoon || ''}
                  onChange={(e) => handleFieldChange('weather', { morning: formData.weather?.morning || 'Cerah', afternoon: e.target.value })}
                  placeholder="Cerah / Hujan"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-pln-blue"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Jumlah Tenaga Kerja (Orang)</label>
                <input
                  type="number"
                  min="0"
                  value={formData.manpowerCount ?? ''}
                  onChange={(e) => handleFieldChange('manpowerCount', parseInt(e.target.value) || 0)}
                  placeholder="4"
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-pln-blue font-bold"
                />
              </div>
            </div>

            {/* Executive Summary */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Ringkasan Eksekutif Pekerjaan
              </label>
              <textarea
                rows={3}
                value={formData.executiveSummary}
                onChange={(e) => handleFieldChange('executiveSummary', e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-300 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-pln-blue leading-relaxed"
              />
            </div>

            {/* Photo Manager */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase">
                    Foto Dokumentasi ({formData.photos.length} Foto)
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    Mendukung upload gambar dari HP/laptop atau path foto /progress/...
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleAddPhoto}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 text-pln-blue text-xs font-bold hover:bg-blue-100 transition"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Tambah Foto</span>
                </button>
              </div>

              <div className="space-y-4">
                {formData.photos.map((photo, pIdx) => (
                  <div key={photo.id || pIdx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 flex flex-col sm:flex-row gap-4 items-start">
                    {/* Thumbnail Preview */}
                    <div className="relative w-28 h-20 bg-slate-200 rounded-lg overflow-hidden shrink-0 border border-slate-300">
                      <img src={photo.url} alt="preview" className="w-full h-full object-cover" />
                      <label className="absolute inset-0 bg-black/40 text-white flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer transition text-[10px] font-bold">
                        <Upload className="w-4 h-4 mr-1" /> Ganti
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            if (e.target.files?.[0]) {
                              handlePhotoUpload(pIdx, e.target.files[0]);
                            }
                          }}
                        />
                      </label>
                    </div>

                    {/* Inputs */}
                    <div className="flex-1 w-full space-y-2">
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={photo.caption}
                          onChange={(e) => handlePhotoChange(pIdx, 'caption', e.target.value)}
                          placeholder="Judul / Keterangan Foto"
                          className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-900"
                        />
                        <button
                          type="button"
                          onClick={() => handleDeletePhoto(pIdx)}
                          className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg transition"
                          title="Hapus Foto"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <textarea
                        rows={2}
                        value={photo.narrative}
                        onChange={(e) => handlePhotoChange(pIdx, 'narrative', e.target.value)}
                        placeholder="Narasi teknis pekerjaan..."
                        className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-700"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Steps Manager */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-xs font-bold text-slate-900 uppercase">
                  Rencana Kerja 2 Hari Berikutnya
                </h4>
                <button
                  type="button"
                  onClick={handleAddStep}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-50 text-amber-800 text-xs font-bold hover:bg-amber-100 transition"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Tambah Butir</span>
                </button>
              </div>
              <div className="space-y-2">
                {formData.nextSteps.map((step, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={step}
                      onChange={(e) => handleStepChange(sIdx, e.target.value)}
                      className="flex-1 px-3 py-1.5 rounded-lg border border-slate-300 text-xs text-slate-900"
                    />
                    <button
                      type="button"
                      onClick={() => handleDeleteStep(sIdx)}
                      className="p-1.5 text-slate-400 hover:text-rose-600 rounded-lg transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Save Bar */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div className="text-[11px] text-slate-500">
                Penyimpanan ke <span className="font-mono font-bold">localStorage</span> browser langsung tampil di portal & PDF.
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl border border-slate-300 text-xs font-bold text-slate-600 hover:bg-slate-100 transition"
                >
                  Tutup
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pln-blue text-white text-xs font-extrabold hover:bg-sky-600 shadow-sm transition"
                >
                  <Save className="w-4 h-4" />
                  <span>Simpan Perubahan Laporan</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
