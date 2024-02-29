'use client'

import { AcademicCapIcon, AdjustmentsHorizontalIcon, AdjustmentsVerticalIcon, ArchiveBoxArrowDownIcon, ArchiveBoxIcon, ArchiveBoxXMarkIcon, ArrowDownCircleIcon, ArrowDownIcon, ArrowDownLeftIcon, ArrowDownOnSquareIcon, ArrowDownOnSquareStackIcon, ArrowDownRightIcon, ArrowDownTrayIcon, ArrowLeftCircleIcon, ArrowLeftEndOnRectangleIcon, ArrowLeftIcon, ArrowLeftStartOnRectangleIcon, ArrowLongDownIcon, ArrowLongLeftIcon, ArrowLongRightIcon, ArrowLongUpIcon, ArrowPathIcon, ArrowPathRoundedSquareIcon, ArrowRightCircleIcon, ArrowRightEndOnRectangleIcon, ArrowRightIcon, ArrowRightStartOnRectangleIcon, ArrowTopRightOnSquareIcon, ArrowTrendingDownIcon, ArrowTrendingUpIcon, ArrowUpCircleIcon, ArrowUpIcon, ArrowUpLeftIcon, ArrowUpOnSquareIcon, ArrowUpOnSquareStackIcon, ArrowUpRightIcon, ArrowUpTrayIcon, ArrowUturnDownIcon, ArrowUturnLeftIcon, ArrowUturnRightIcon, ArrowUturnUpIcon, ArrowsPointingInIcon, ArrowsPointingOutIcon, ArrowsRightLeftIcon, ArrowsUpDownIcon, AtSymbolIcon, BackspaceIcon, BackwardIcon, BanknotesIcon, Bars2Icon, Bars3BottomLeftIcon, Bars3BottomRightIcon, Bars3CenterLeftIcon, Bars3Icon, Bars4Icon, BarsArrowDownIcon, BarsArrowUpIcon, Battery0Icon, Battery100Icon, Battery50Icon, BeakerIcon, BellAlertIcon, BellIcon, BellSlashIcon, BellSnoozeIcon, BoltIcon, BoltSlashIcon, BookOpenIcon, BookmarkIcon, BookmarkSlashIcon, BookmarkSquareIcon, BriefcaseIcon, BugAntIcon, BuildingLibraryIcon, BuildingOffice2Icon, BuildingOfficeIcon, BuildingStorefrontIcon, CakeIcon, CalculatorIcon, CalendarDaysIcon, CalendarIcon, CameraIcon, ChartBarIcon, ChartBarSquareIcon, ChartPieIcon, ChatBubbleBottomCenterIcon, ChatBubbleBottomCenterTextIcon, ChatBubbleLeftEllipsisIcon, ChatBubbleLeftIcon, ChatBubbleLeftRightIcon, ChatBubbleOvalLeftEllipsisIcon, ChatBubbleOvalLeftIcon, CheckBadgeIcon, CheckCircleIcon, CheckIcon, ChevronDoubleDownIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronDoubleUpIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, ChevronUpDownIcon, ChevronUpIcon, CircleStackIcon, ClipboardDocumentCheckIcon, ClipboardDocumentIcon, ClipboardDocumentListIcon, ClipboardIcon, ClockIcon, CloudArrowDownIcon, CloudArrowUpIcon, CloudIcon, CodeBracketIcon, CodeBracketSquareIcon, Cog6ToothIcon, Cog8ToothIcon, CogIcon, CommandLineIcon, ComputerDesktopIcon, CpuChipIcon, CreditCardIcon, CubeIcon, CubeTransparentIcon, CurrencyBangladeshiIcon, CurrencyDollarIcon, CurrencyEuroIcon, CurrencyPoundIcon, CurrencyRupeeIcon, CurrencyYenIcon, CursorArrowRaysIcon, CursorArrowRippleIcon, DevicePhoneMobileIcon, DeviceTabletIcon, DocumentArrowDownIcon, DocumentArrowUpIcon, DocumentChartBarIcon, DocumentCheckIcon, DocumentDuplicateIcon, DocumentIcon, DocumentMagnifyingGlassIcon, DocumentMinusIcon, DocumentPlusIcon, DocumentTextIcon, EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon, EllipsisVerticalIcon, EnvelopeIcon, EnvelopeOpenIcon, ExclamationCircleIcon, ExclamationTriangleIcon, EyeDropperIcon, EyeIcon, EyeSlashIcon, FaceFrownIcon, FaceSmileIcon, FilmIcon, FingerPrintIcon, FireIcon, FlagIcon, FolderArrowDownIcon, FolderIcon, FolderMinusIcon, FolderOpenIcon, FolderPlusIcon, ForwardIcon, FunnelIcon, GifIcon, GiftIcon, GiftTopIcon, GlobeAltIcon, GlobeAmericasIcon, GlobeAsiaAustraliaIcon, GlobeEuropeAfricaIcon, HandRaisedIcon, HandThumbDownIcon, HandThumbUpIcon, HashtagIcon, HeartIcon, HomeIcon, HomeModernIcon, IdentificationIcon, InboxArrowDownIcon, InboxIcon, InboxStackIcon, InformationCircleIcon, KeyIcon, LanguageIcon, LifebuoyIcon, LightBulbIcon, LinkIcon, ListBulletIcon, LockClosedIcon, LockOpenIcon, MagnifyingGlassCircleIcon, MagnifyingGlassIcon, MagnifyingGlassMinusIcon, MagnifyingGlassPlusIcon, MapIcon, MapPinIcon, MegaphoneIcon, MicrophoneIcon, MinusCircleIcon, MinusIcon, MoonIcon, MusicalNoteIcon, NewspaperIcon, NoSymbolIcon, PaintBrushIcon, PaperAirplaneIcon, PaperClipIcon, PauseCircleIcon, PauseIcon, PencilIcon, PencilSquareIcon, PhoneArrowDownLeftIcon, PhoneArrowUpRightIcon, PhoneIcon, PhoneXMarkIcon, PhotoIcon, PlayCircleIcon, PlayIcon, PlayPauseIcon, PlusCircleIcon, PlusIcon, PowerIcon, PresentationChartBarIcon, PresentationChartLineIcon, PrinterIcon, PuzzlePieceIcon, QrCodeIcon, QuestionMarkCircleIcon, QueueListIcon, RadioIcon, ReceiptPercentIcon, ReceiptRefundIcon, RectangleGroupIcon, RectangleStackIcon, RocketLaunchIcon, RssIcon, ScaleIcon, ScissorsIcon, ServerIcon, ServerStackIcon, ShareIcon, ShieldCheckIcon, ShieldExclamationIcon, ShoppingBagIcon, ShoppingCartIcon, SignalIcon, SignalSlashIcon, SparklesIcon, SpeakerWaveIcon, SpeakerXMarkIcon, Square2StackIcon, Square3Stack3DIcon, Squares2X2Icon, SquaresPlusIcon, StarIcon, StopCircleIcon, StopIcon, SunIcon, SwatchIcon, TableCellsIcon, TagIcon, TicketIcon, TrashIcon, TrophyIcon, TruckIcon, TvIcon, UserCircleIcon, UserGroupIcon, UserIcon, UserMinusIcon, UserPlusIcon, UsersIcon, VariableIcon, VideoCameraIcon, VideoCameraSlashIcon, ViewColumnsIcon, ViewfinderCircleIcon, WalletIcon, WifiIcon, WindowIcon, WrenchIcon, WrenchScrewdriverIcon, XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { HexColorPicker } from 'react-colorful';
import { useRef, useState } from 'react';
import html2canvas from "html2canvas";

export default function Home() {
	const [bgColour, setBgColor] = useState('#456789');
	const [iconBgColour, setIconBgColour] = useState('#ffffff');
	const [iconColour, setIconColour] = useState('#000000');

	const wallpaperRef = useRef<HTMLElement>(null);

	const downloadWallpaper = async () => {
		console.log('starting to download...');

		const wallpaperElement = wallpaperRef.current;
		if (!wallpaperElement) return;

		try {
			const result = await html2canvas(wallpaperElement, { removeContainer: false, backgroundColor: null });

			const asURL = result.toDataURL('image/png');
			const anchor = document.createElement('a');
			anchor.href = asURL;
			anchor.download = 'hericon-wallpaper.png';
			anchor.click();
			anchor.remove();
		} catch (err) {
			console.error('Error: ', err);
		}
	};

	return (
		<div className="flex h-screen">
			<div className="hidden md:flex flex-col w-64 bg-gray-100">
				<div className="flex items-center justify-center h-16 bg-gray-100">
					<span className=" font-bold uppercase">Settings</span>
				</div>

				<div className="flex flex-col overflow-y-auto">
					<div className="flex-1 px-2 bg-gray-100">
						<div className="flex flex-col items-center mb-6">
							<h2 className="flex flex-row flex-nowrap items-center">
								<span className="flex-none block mx-2 px-2 py-2 text-sm rounded-xl leading-none  bg-slate-700 text-white">Background</span>
							</h2>
							<HexColorPicker className="p-2" color={bgColour} onChange={setBgColor} />
							<p>{bgColour}</p>
						</div>
						<div className="flex flex-col items-center mb-6">
							<h2 className="flex flex-row flex-nowrap items-center">
								<span className="flex-none block mx-2 px-2 py-2 text-sm rounded-xl leading-none  bg-slate-700 text-white">Icon Background</span>
							</h2>
							<HexColorPicker className="p-2" color={iconBgColour} onChange={setIconBgColour} />
							<p>{iconBgColour}</p>
						</div>
						<div className="flex flex-col items-center mb-6">
							<h2 className="flex flex-row flex-nowrap items-center">
								<span className="flex-none block mx-2 px-2 py-2 text-sm rounded-xl leading-none  bg-slate-700 text-white">Icon Colour</span>
							</h2>
							<HexColorPicker className="p-2" color={iconColour} onChange={setIconColour} />
							<p>{iconColour}</p>
						</div>
						<div className="flex flex-col items-center">
							<button className="bg-emerald-500 rounded-full p-2 text-white hover:-translate-y-1 active:translate-y-0 transition-all ease-in-out duration-100" onClick={downloadWallpaper}>
								<div className="flex justify-center gap-1 items-center">
									<ArrowDownTrayIcon width={20} height={20} />
									<span>Download</span>
								</div>
							</button>
						</div>
					</div>
				</div>
			</div>

			<article ref={wallpaperRef} className="flex flex-col flex-1 overflow-y-auto">
				<div style={{ backgroundColor: `${bgColour}` }} className="w-full h-screen pt-20">
					<div style={{ color: `${iconColour}`, backgroundColor: `${iconBgColour}` }} className={`flex flex-wrap mx-auto max-w-6xl p-6 gap-2  rounded-3xl shadow]`}>
						<AcademicCapIcon width={40} height={40} />
						<AdjustmentsHorizontalIcon width={40} height={40} />
						<AdjustmentsVerticalIcon width={40} height={40} />
						<ArchiveBoxArrowDownIcon width={40} height={40} />
						<ArchiveBoxXMarkIcon width={40} height={40} />
						<ArchiveBoxIcon width={40} height={40} />
						<ArrowDownCircleIcon width={40} height={40} />
						<ArrowDownLeftIcon width={40} height={40} />
						<ArrowDownOnSquareStackIcon width={40} height={40} />
						<ArrowDownOnSquareIcon width={40} height={40} />
						<ArrowDownRightIcon width={40} height={40} />
						<ArrowDownTrayIcon width={40} height={40} />
						<ArrowDownIcon width={40} height={40} />
						<ArrowLeftCircleIcon width={40} height={40} />
						<ArrowLeftEndOnRectangleIcon width={40} height={40} />
						<ArrowLeftStartOnRectangleIcon width={40} height={40} />
						<ArrowLeftIcon width={40} height={40} />
						<ArrowLongDownIcon width={40} height={40} />
						<ArrowLongLeftIcon width={40} height={40} />
						<ArrowLongRightIcon width={40} height={40} />
						<ArrowLongUpIcon width={40} height={40} />
						<ArrowPathRoundedSquareIcon width={40} height={40} />
						<ArrowPathIcon width={40} height={40} />
						<ArrowRightCircleIcon width={40} height={40} />
						<ArrowRightEndOnRectangleIcon width={40} height={40} />
						<ArrowRightStartOnRectangleIcon width={40} height={40} />
						<ArrowRightIcon width={40} height={40} />
						<ArrowTopRightOnSquareIcon width={40} height={40} />
						<ArrowTrendingDownIcon width={40} height={40} />
						<ArrowTrendingUpIcon width={40} height={40} />
						<ArrowUpCircleIcon width={40} height={40} />
						<ArrowUpLeftIcon width={40} height={40} />
						<ArrowUpOnSquareStackIcon width={40} height={40} />
						<ArrowUpOnSquareIcon width={40} height={40} />
						<ArrowUpRightIcon width={40} height={40} />
						<ArrowUpTrayIcon width={40} height={40} />
						<ArrowUpIcon width={40} height={40} />
						<ArrowUturnDownIcon width={40} height={40} />
						<ArrowUturnLeftIcon width={40} height={40} />
						<ArrowUturnRightIcon width={40} height={40} />
						<ArrowUturnUpIcon width={40} height={40} />
						<ArrowsPointingInIcon width={40} height={40} />
						<ArrowsPointingOutIcon width={40} height={40} />
						<ArrowsRightLeftIcon width={40} height={40} />
						<ArrowsUpDownIcon width={40} height={40} />
						<AtSymbolIcon width={40} height={40} />
						<BackspaceIcon width={40} height={40} />
						<BackwardIcon width={40} height={40} />
						<BanknotesIcon width={40} height={40} />
						<Bars2Icon width={40} height={40} />
						<Bars3BottomLeftIcon width={40} height={40} />
						<Bars3BottomRightIcon width={40} height={40} />
						<Bars3CenterLeftIcon width={40} height={40} />
						<Bars3Icon width={40} height={40} />
						<Bars4Icon width={40} height={40} />
						<BarsArrowDownIcon width={40} height={40} />
						<BarsArrowUpIcon width={40} height={40} />
						<Battery0Icon width={40} height={40} />
						<Battery100Icon width={40} height={40} />
						<Battery50Icon width={40} height={40} />
						<BeakerIcon width={40} height={40} />
						<BellAlertIcon width={40} height={40} />
						<BellSlashIcon width={40} height={40} />
						<BellSnoozeIcon width={40} height={40} />
						<BellIcon width={40} height={40} />
						<BoltSlashIcon width={40} height={40} />
						<BoltIcon width={40} height={40} />
						<BookOpenIcon width={40} height={40} />
						<BookmarkSlashIcon width={40} height={40} />
						<BookmarkSquareIcon width={40} height={40} />
						<BookmarkIcon width={40} height={40} />
						<BriefcaseIcon width={40} height={40} />
						<BugAntIcon width={40} height={40} />
						<BuildingLibraryIcon width={40} height={40} />
						<BuildingOffice2Icon width={40} height={40} />
						<BuildingOfficeIcon width={40} height={40} />
						<BuildingStorefrontIcon width={40} height={40} />
						<CakeIcon width={40} height={40} />
						<CalculatorIcon width={40} height={40} />
						<CalendarDaysIcon width={40} height={40} />
						<CalendarIcon width={40} height={40} />
						<CameraIcon width={40} height={40} />
						<ChartBarSquareIcon width={40} height={40} />
						<ChartBarIcon width={40} height={40} />
						<ChartPieIcon width={40} height={40} />
						<ChatBubbleBottomCenterTextIcon width={40} height={40} />
						<ChatBubbleBottomCenterIcon width={40} height={40} />
						<ChatBubbleLeftEllipsisIcon width={40} height={40} />
						<ChatBubbleLeftRightIcon width={40} height={40} />
						<ChatBubbleLeftIcon width={40} height={40} />
						<ChatBubbleOvalLeftEllipsisIcon width={40} height={40} />
						<ChatBubbleOvalLeftIcon width={40} height={40} />
						<CheckBadgeIcon width={40} height={40} />
						<CheckCircleIcon width={40} height={40} />
						<CheckIcon width={40} height={40} />
						<ChevronDoubleDownIcon width={40} height={40} />
						<ChevronDoubleLeftIcon width={40} height={40} />
						<ChevronDoubleRightIcon width={40} height={40} />
						<ChevronDoubleUpIcon width={40} height={40} />
						<ChevronDownIcon width={40} height={40} />
						<ChevronLeftIcon width={40} height={40} />
						<ChevronRightIcon width={40} height={40} />
						<ChevronUpDownIcon width={40} height={40} />
						<ChevronUpIcon width={40} height={40} />
						<CircleStackIcon width={40} height={40} />
						<ClipboardDocumentCheckIcon width={40} height={40} />
						<ClipboardDocumentListIcon width={40} height={40} />
						<ClipboardDocumentIcon width={40} height={40} />
						<ClipboardIcon width={40} height={40} />
						<ClockIcon width={40} height={40} />
						<CloudArrowDownIcon width={40} height={40} />
						<CloudArrowUpIcon width={40} height={40} />
						<CloudIcon width={40} height={40} />
						<CodeBracketSquareIcon width={40} height={40} />
						<CodeBracketIcon width={40} height={40} />
						<Cog6ToothIcon width={40} height={40} />
						<Cog8ToothIcon width={40} height={40} />
						<CogIcon width={40} height={40} />
						<CommandLineIcon width={40} height={40} />
						<ComputerDesktopIcon width={40} height={40} />
						<CpuChipIcon width={40} height={40} />
						<CreditCardIcon width={40} height={40} />
						<CubeTransparentIcon width={40} height={40} />
						<CubeIcon width={40} height={40} />
						<CurrencyBangladeshiIcon width={40} height={40} />
						<CurrencyDollarIcon width={40} height={40} />
						<CurrencyEuroIcon width={40} height={40} />
						<CurrencyPoundIcon width={40} height={40} />
						<CurrencyRupeeIcon width={40} height={40} />
						<CurrencyYenIcon width={40} height={40} />
						<CursorArrowRaysIcon width={40} height={40} />
						<CursorArrowRippleIcon width={40} height={40} />
						<DevicePhoneMobileIcon width={40} height={40} />
						<DeviceTabletIcon width={40} height={40} />
						<DocumentArrowDownIcon width={40} height={40} />
						<DocumentArrowUpIcon width={40} height={40} />
						<DocumentChartBarIcon width={40} height={40} />
						<DocumentCheckIcon width={40} height={40} />
						<DocumentDuplicateIcon width={40} height={40} />
						<DocumentMagnifyingGlassIcon width={40} height={40} />
						<DocumentMinusIcon width={40} height={40} />
						<DocumentPlusIcon width={40} height={40} />
						<DocumentTextIcon width={40} height={40} />
						<DocumentIcon width={40} height={40} />
						<EllipsisHorizontalCircleIcon width={40} height={40} />
						<EllipsisHorizontalIcon width={40} height={40} />
						<EllipsisVerticalIcon width={40} height={40} />
						<EnvelopeOpenIcon width={40} height={40} />
						<EnvelopeIcon width={40} height={40} />
						<ExclamationCircleIcon width={40} height={40} />
						<ExclamationTriangleIcon width={40} height={40} />
						<EyeDropperIcon width={40} height={40} />
						<EyeSlashIcon width={40} height={40} />
						<EyeIcon width={40} height={40} />
						<FaceFrownIcon width={40} height={40} />
						<FaceSmileIcon width={40} height={40} />
						<FilmIcon width={40} height={40} />
						<FingerPrintIcon width={40} height={40} />
						<FireIcon width={40} height={40} />
						<FlagIcon width={40} height={40} />
						<FolderArrowDownIcon width={40} height={40} />
						<FolderMinusIcon width={40} height={40} />
						<FolderOpenIcon width={40} height={40} />
						<FolderPlusIcon width={40} height={40} />
						<FolderIcon width={40} height={40} />
						<ForwardIcon width={40} height={40} />
						<FunnelIcon width={40} height={40} />
						<GifIcon width={40} height={40} />
						<GiftTopIcon width={40} height={40} />
						<GiftIcon width={40} height={40} />
						<GlobeAltIcon width={40} height={40} />
						<GlobeAmericasIcon width={40} height={40} />
						<GlobeAsiaAustraliaIcon width={40} height={40} />
						<GlobeEuropeAfricaIcon width={40} height={40} />
						<HandRaisedIcon width={40} height={40} />
						<HandThumbDownIcon width={40} height={40} />
						<HandThumbUpIcon width={40} height={40} />
						<HashtagIcon width={40} height={40} />
						<HeartIcon width={40} height={40} />
						<HomeModernIcon width={40} height={40} />
						<HomeIcon width={40} height={40} />
						<IdentificationIcon width={40} height={40} />
						<InboxArrowDownIcon width={40} height={40} />
						<InboxStackIcon width={40} height={40} />
						<InboxIcon width={40} height={40} />
						<InformationCircleIcon width={40} height={40} />
						<KeyIcon width={40} height={40} />
						<LanguageIcon width={40} height={40} />
						<LifebuoyIcon width={40} height={40} />
						<LightBulbIcon width={40} height={40} />
						<LinkIcon width={40} height={40} />
						<ListBulletIcon width={40} height={40} />
						<LockClosedIcon width={40} height={40} />
						<LockOpenIcon width={40} height={40} />
						<MagnifyingGlassCircleIcon width={40} height={40} />
						<MagnifyingGlassMinusIcon width={40} height={40} />
						<MagnifyingGlassPlusIcon width={40} height={40} />
						<MagnifyingGlassIcon width={40} height={40} />
						<MapPinIcon width={40} height={40} />
						<MapIcon width={40} height={40} />
						<MegaphoneIcon width={40} height={40} />
						<MicrophoneIcon width={40} height={40} />
						<MinusCircleIcon width={40} height={40} />
						<MinusIcon width={40} height={40} />
						<MoonIcon width={40} height={40} />
						<MusicalNoteIcon width={40} height={40} />
						<NewspaperIcon width={40} height={40} />
						<NoSymbolIcon width={40} height={40} />
						<PaintBrushIcon width={40} height={40} />
						<PaperAirplaneIcon width={40} height={40} />
						<PaperClipIcon width={40} height={40} />
						<PauseCircleIcon width={40} height={40} />
						<PauseIcon width={40} height={40} />
						<PencilSquareIcon width={40} height={40} />
						<PencilIcon width={40} height={40} />
						<PhoneArrowDownLeftIcon width={40} height={40} />
						<PhoneArrowUpRightIcon width={40} height={40} />
						<PhoneXMarkIcon width={40} height={40} />
						<PhoneIcon width={40} height={40} />
						<PhotoIcon width={40} height={40} />
						<PlayCircleIcon width={40} height={40} />
						<PlayPauseIcon width={40} height={40} />
						<PlayIcon width={40} height={40} />
						<PlusCircleIcon width={40} height={40} />
						<PlusIcon width={40} height={40} />
						<PowerIcon width={40} height={40} />
						<PresentationChartBarIcon width={40} height={40} />
						<PresentationChartLineIcon width={40} height={40} />
						<PrinterIcon width={40} height={40} />
						<PuzzlePieceIcon width={40} height={40} />
						<QrCodeIcon width={40} height={40} />
						<QuestionMarkCircleIcon width={40} height={40} />
						<QueueListIcon width={40} height={40} />
						<RadioIcon width={40} height={40} />
						<ReceiptPercentIcon width={40} height={40} />
						<ReceiptRefundIcon width={40} height={40} />
						<RectangleGroupIcon width={40} height={40} />
						<RectangleStackIcon width={40} height={40} />
						<RocketLaunchIcon width={40} height={40} />
						<RssIcon width={40} height={40} />
						<ScaleIcon width={40} height={40} />
						<ScissorsIcon width={40} height={40} />
						<ServerStackIcon width={40} height={40} />
						<ServerIcon width={40} height={40} />
						<ShareIcon width={40} height={40} />
						<ShieldCheckIcon width={40} height={40} />
						<ShieldExclamationIcon width={40} height={40} />
						<ShoppingBagIcon width={40} height={40} />
						<ShoppingCartIcon width={40} height={40} />
						<SignalSlashIcon width={40} height={40} />
						<SignalIcon width={40} height={40} />
						<SparklesIcon width={40} height={40} />
						<SpeakerWaveIcon width={40} height={40} />
						<SpeakerXMarkIcon width={40} height={40} />
						<Square2StackIcon width={40} height={40} />
						<Square3Stack3DIcon width={40} height={40} />
						<Squares2X2Icon width={40} height={40} />
						<SquaresPlusIcon width={40} height={40} />
						<StarIcon width={40} height={40} />
						<StopCircleIcon width={40} height={40} />
						<StopIcon width={40} height={40} />
						<SunIcon width={40} height={40} />
						<SwatchIcon width={40} height={40} />
						<TableCellsIcon width={40} height={40} />
						<TagIcon width={40} height={40} />
						<TicketIcon width={40} height={40} />
						<TrashIcon width={40} height={40} />
						<TrophyIcon width={40} height={40} />
						<TruckIcon width={40} height={40} />
						<TvIcon width={40} height={40} />
						<UserCircleIcon width={40} height={40} />
						<UserGroupIcon width={40} height={40} />
						<UserMinusIcon width={40} height={40} />
						<UserPlusIcon width={40} height={40} />
						<UserIcon width={40} height={40} />
						<UsersIcon width={40} height={40} />
						<VariableIcon width={40} height={40} />
						<VideoCameraSlashIcon width={40} height={40} />
						<VideoCameraIcon width={40} height={40} />
						<ViewColumnsIcon width={40} height={40} />
						<ViewfinderCircleIcon width={40} height={40} />
						<WalletIcon width={40} height={40} />
						<WifiIcon width={40} height={40} />
						<WindowIcon width={40} height={40} />
						<WrenchScrewdriverIcon width={40} height={40} />
						<WrenchIcon width={40} height={40} />
						<XCircleIcon width={40} height={40} />
						<XMarkIcon width={40} height={40} />
					</div>
				</div>
			</article>
		</div>
	);
}
